import './myTickets.scss';

import Ticket from '../../ticket/Ticket';
import Spinner from '../../common/spinner/Spinner';
import useCinemaServices from '../../../services/CinemaServices';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setUserTickets } from '../../../slices/tickets';
import { sessionsFetched } from '../../../slices/sessions';
import { filmsFetched } from '../../../slices/films';
import { hallsFetched } from '../../../slices/halls';
import Divider from '../../common/divider/Divider';
import { createSelector } from '@reduxjs/toolkit';
import ErrorMessage from '../../common/errorMessage/ErrorMessage'

const MyTickets = () => {
	const { getAuthenticatedData, getData, loading, error } = useCinemaServices();

	const dispatch = useDispatch();

	const userTicketsSelector = createSelector(
		(state) => state.tickets.userTickets,
		(state) => state.sessions.sessions,
		(state) => state.films.films,
		(state) => state.halls.halls,

		(userTickets, sessions, films, halls) => {
			const tickets = userTickets.map((ticket) => {
				const session = sessions.find(s => s.session_id === ticket.session_id);
				const film = films.find(f => session && session.film_id === f.film_id);
				const hall = halls.find(h => session && session.hall_id === h.hall_id);

				return {
					// date: session ? new Date(new Date(session.start_time).getTime() - 10800 * 1000) : new Date(),
					date: session ? new Date(session.start_time.split('').slice(0, session.start_time.length - 1).join('')) : new Date(),
					title : film ? film.title : '',
					hallName: hall ? hall.name : '',
					cover: film ? film.cover : '',
					seat: ticket ? ticket.seat_num : -1
				}
			});

			return tickets.sort((a, b) => b.date.getTime() - a.date.getTime());
		}
	);

	const userTickets = useSelector(userTicketsSelector);
	const token = Cookies.get('jwtToken');

	useEffect(() => { //сейчас данных очень мало, но в будущем мне кажется, что могут появиться проблемы, потому что я получаю все позиции с БД
		getAuthenticatedData('/api/user-tickets', token)
			.then(res => dispatch(setUserTickets(res.data)))
			.catch(error => console.log(error));

		getData('/api/sessions')
			.then(res => dispatch(sessionsFetched(res.data)))
			.catch(error => console.log(error));

		getData('/api/films')
			.then(res => dispatch(filmsFetched(res.data)))
			.catch(error => console.log(error));

		getData('/api/halls')
			.then(res => dispatch(hallsFetched(res.data)))
			.catch(error => console.log(error));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token]);

	const renderUserTickets = () => { //поиск информации о билете
		return userTickets.map((ticket, index) => {

			return (
				<>
					<Ticket key={index} {...ticket} mods={index === 0 ? 'ticket_mt-40' : 'ticket_mt-24'}/>

					{
						(index !== userTickets.length - 1) ? 
							<Divider mods={'divider_mt-24'}/> :
							null
					}
				</>
			);
		});
	};

	const errorMessage = error ? <ErrorMessage/> : null;
	const isLoading = loading ? <Spinner/> : null;
	const content = !(isLoading || errorMessage) ? renderUserTickets() : null;
	const isEmpty = !loading && !content.length ? <div className="my-tickets__message">IS EMPTY!</div> : null;

	return (
		<div className="my-tickets">
			<h2 className="my-tickets__header">My tickets</h2>
			<div className="my-tickets__descr">It contains all the tickets you've ever bought.</div>

			{ content }
			{ isLoading }
			{ errorMessage }
			{ isEmpty }

		</div>
	);
};

export default MyTickets;