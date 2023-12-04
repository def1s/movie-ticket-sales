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
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";

const FilmDetails = () => {
	const { getData, loading, error, clearError } = useCinemaServices();
	const { film_id } = useParams(); //получение айди фильма из адресной строки
	
	const dispatch = useDispatch();

	//получаем сессии и сортируем их, чтобы сразу правильно отображать в дальнейшем
	//также в процессе просходит создание Date
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

	useEffect(() => { //получаем сессии с нужным фильмом
		clearError();
		getData(`/api/sessions/${film_id}`)
			.then(result => dispatch(sessionsFetched(result.data)))
			.catch(error => {
				console.log(error);
			});
		
		for (const film of films) { //находим выбранный фильм в массиве полученных
			if (film.film_id == film_id) {
				dispatch(filmSelecting(film));
			}
		}
	}, [film_id]);

	const spinner = loading ? <Spinner/> : null;
	const errorMessage = error ? <ErrorMessage/> : null;
	const content = !(errorMessage || spinner) ? <View sortedSessions={sortedSessions}/> : null;

	return (
		<div className={'film-details'}>
			{ spinner }
			{ errorMessage }
			{ content }
		</div>
	);
}

const View = ({ sortedSessions }) => {
	return (
		<>

			<div className="film-details__label">ORDER</div>

			<DateSelection sessions={sortedSessions}/>

			<Divider mods={'divider_mt'}/>

			<SessionDetails sessions={sortedSessions}/>

		</>
	);
};

export default FilmDetails;