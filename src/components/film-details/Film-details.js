import './film-details.scss';

import DateSelection from '../date-selection/Date-selection';
import SessionDetails from '../session-details/Session-details';
import Divider from '../divider/Divider';
import useCinemaServices from '../../services/CinemaServices';

import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { sessionsFetched } from '../../slices/sessions';
import { filmSelecting } from '../../slices/films';

const FilmDetails = () => {
	const { getFilm, getSessions } = useCinemaServices();
	const { film_id } = useParams();
	
	const dispatch = useDispatch();

	const sortedSessionsSelector = createSelector(
		(state) => state.sessions.sessions,
		(sessions) => {
			return sessions.map(session => ({
				...session,
				start_time: new Date(session.start_time)
			})).sort((a, b) => a.start_time - b.start_time);
		}
	);

	const sortedSessions = useSelector(sortedSessionsSelector);

	useEffect(() => {
		// dispatch(filmSelecting(film_id));
		getSessions(`/sessions/${film_id}`)
			.then(result => dispatch(sessionsFetched(result)))
			.catch(err => console.log(err));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [film_id]);

	useEffect(() => {
		getFilm(`/films/${film_id}`)
			.then(result => dispatch(filmSelecting(result[0])))
			.catch(err => console.log(err));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [film_id]);

	console.log('RENDER FILM DETAILS');

	return (
		<div class="film-details">

			<div class="film-details__label">ORDER</div>

			<DateSelection sessions={sortedSessions}/>

			<Divider mods={'divider_mt'}/>

			<SessionDetails 
				sessions={sortedSessions} 
			/>

		</div>
	);
}

export default FilmDetails;