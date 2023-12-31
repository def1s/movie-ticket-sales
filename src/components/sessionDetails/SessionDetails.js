import './sessionDetails.scss';

import React from 'react';
import { useSelector } from 'react-redux';

import CinemaHall from '../filmsComponents/cinemaHall/CinemaHall';

const SessionDetails = ({ sessions }) => {
	const selectedDate = new Date(useSelector(state => state.times.selectedDate));

	//из всех сессий оставляем только те, в которых совпадает выбранная дата по году, месяцу и числу
	const filteredSessions = sessions.filter(session => {
		const date1 = `${session.start_time.getFullYear()} ${session.start_time.getMonth()} ${session.start_time.getDate()}`;
		const date2 = `${selectedDate.getFullYear()} ${selectedDate.getMonth()} ${selectedDate.getDate()}`;
		return date1 === date2;
	});

	//у нас остается массив, в котором нужно сгруппировать время по типу зала
	const groupedSessions = filteredSessions.reduce((groups, session) => { //группировка времени по залам
		const hall_id = session.hall_id;
		(groups[hall_id] = groups[hall_id] || []).push(session);
		return groups;
	}, {});

	const renderHalls = (groupedSessions) => {
		const halls = [];
		for (let key in groupedSessions) {
			halls.push(
				<CinemaHall hall={groupedSessions[key]} hall_id={key} key={key}/>
			)
		};
		return halls;
	};

	return (
		<div className="session-details">

			<div className="session-details__cinema-name">GRAND LONDON CINEMA</div> {/* брать из бд? */}

			<div className="session-details__cinema-adress">Palm Street, 49</div> {/* бд? */}

			{ renderHalls(groupedSessions) }

		</div>
	);
}

export default SessionDetails;