import './session-details.scss';

import React from 'react';
import { useSelector } from 'react-redux';

import CinemaHall from '../cinema-hall/Cinema-hall';

const MemoizedCinemaHall = React.memo(CinemaHall); //рано начал оптимизировать

const SessionDetails = ({ sessions }) => {
	const selectedDate = useSelector(state => new Date(state.times.selectedDate));

	const filteredSessions = sessions.filter(session => {
		const date1 = `${session.start_time.getFullYear()} ${session.start_time.getMonth()} ${session.start_time.getDate()}`;
		const date2 = `${selectedDate.getFullYear()} ${selectedDate.getMonth()} ${selectedDate.getDate()}`;
		return date1 === date2;
	});

	const groupedSessions = filteredSessions.reduce((groups, session) => { //группировка времени по залам
		const hall_id = session.hall_id;
		(groups[hall_id] = groups[hall_id] || []).push(session);
		return groups;
	}, {});

	const hallsOnPage = [];

	for (let key in groupedSessions) {
		hallsOnPage.push(
			<MemoizedCinemaHall hall={groupedSessions[key]} hall_id={key}/>
		)
	}

	console.log('RENDER SESSION DETAILS');

	return (
		<div class="session-details">

			<div class="session-details__cinema-name">GRAND LONDON CINEMA</div> {/* брать из бд? */}

			<div class="session-details__cinema-adress">Palm Street, 49</div> {/* бд? */}

			{
				hallsOnPage
			}

		</div>
	);
}

export default SessionDetails;