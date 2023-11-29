import './filmDetails.scss';

import DateSelection from '../dateSelection/DateSelection';
import SessionDetails from '../sessionDetails/SessionDetails';
import Divider from '../divider/Divider';
import useCinemaServices from '../../services/CinemaServices';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { sessionsFetched } from '../../slices/sessions';
import { filmSelecting } from '../../slices/films';

const FilmDetails = () => {
	const { getSessions } = useCinemaServices();
	const { film_id } = useParams();
	
	const dispatch = useDispatch();

	const sortedSessionsSelector = createSelector(
		(state) => state.sessions.sessions,
		(sessions) => {
			return sessions.map(session => ({
				...session,
				start_time: new Date(new Date(session.start_time) - 10800 * 1000)
			})).sort((a, b) => a.start_time.getTime() - b.start_time.getTime());
		}
	);

	const sortedSessions = useSelector(sortedSessionsSelector);

	const films = useSelector(state => state.films.films);

	useEffect(() => {
		// dispatch(filmSelecting(film_id));
		getSessions(`/api/sessions/${film_id}`)
			.then(result => dispatch(sessionsFetched(result.data)))
			.catch(error => {
				console.log(error);
			});

		// getFilm(`/films/${film_id}`)
		// 	.then(result => dispatch(filmSelecting(result[0])))
		// 	.catch(err => console.log(err));
		
		for (const film of films) {
			if (film.film_id == film_id) {
				dispatch(filmSelecting(film));
			}
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [film_id]);

	return (
		<div className="film-details">

			<div className="film-details__label">ORDER</div>

			<DateSelection sessions={sortedSessions}/>

			<Divider mods={'divider_mt'}/>

			<SessionDetails sessions={sortedSessions}/>

		</div>
	);
}

export default FilmDetails;