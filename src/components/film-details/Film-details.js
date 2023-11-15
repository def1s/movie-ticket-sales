import './film-details.scss';

import DateSelection from '../date-selection/Date-selection';
import SessionDetails from '../session-details/Session-details';
import Divider from '../divider/Divider';
import useCinemaServices from '../../services/CinemaServices';

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const FilmDetails = () => {
	const {getFilm, getSessions} = useCinemaServices();
	const {film_id} = useParams();

	//получение сессий по датам
	const [film, setFilm] = useState([{}]);
	const [sessions, setSessions] = useState([]);
	// const [halls, getHalls] = useState([]);

	const [currentDate, setCurrentDate] = useState(new Date());

	//ВОЗМОЖНО СТОИТ ПЕРЕНЕСТИ SESSION ИЗ dateSelection НА ЭТОТ УРОВЕНЬ (ОТСОРТИРОВАННЫЙ)

	useEffect(() => {
		getSessions(`/sessions/${film_id}`)
			.then(res => setSessions(res));
	}, [film_id]);
	
	useEffect(() => {
		getFilm(`/films/${film_id}`)
			.then(res => setFilm(res));
	}, [film_id]);

	const getCurrentDate = (date) => {
		setCurrentDate(date);
		console.log(date);
	};

	return (
		<div class="film-details">

			<div class="film-details__label">{film_id}</div> {/* ORDER */}

			<DateSelection film={film} sessions={sessions} getCurrentDate={getCurrentDate}/>

			<Divider mods={'divider_mt'}/>

			<SessionDetails sessions={sessions} currentDate={currentDate}/>

		</div>
	);
}

export default FilmDetails;