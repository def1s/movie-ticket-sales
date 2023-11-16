import './session-details.scss';

import React from 'react';

import CinemaHall from '../cinema-hall/Cinema-hall';

const MemoizedCinemaHall = React.memo(CinemaHall);

const SessionDetails = ({ sessions, selectedDate, getSelectedDate, onSelectTime, selectedTime }) => {
	const updatedSessions = sessions.map(session => ({ //повторение кода одного из компонентов, исправить выносом функционала на уровень выше
		...session,
		start_time: new Date(session.start_time)
	}));

	const filteredSessions = updatedSessions.filter(session => {
		const date1 = `${session.start_time.getFullYear()} ${session.start_time.getMonth()} ${session.start_time.getDate()}`;
		const date2 = `${selectedDate.getFullYear()} ${selectedDate.getMonth()} ${selectedDate.getDate()}`;
		return date1 === date2;
	});

	// console.log(filteredSessions);

	const groupedSessions = filteredSessions.reduce((groups, session) => { //группировка времени по залам
		const hall_id = session.hall_id;
		(groups[hall_id] = groups[hall_id] || []).push(session);
		return groups;
	}, {});

	// console.log(groupedSessions);

	const hallsOnPage = [];

	for (let key in groupedSessions) {
		hallsOnPage.push(
			<MemoizedCinemaHall hall={groupedSessions[key]} hall_id={key} getSelectedDate={getSelectedDate} onSelectTime={onSelectTime} selectedTime={selectedTime}/>
		)
	}

	// const sessionsOnPage = filteredSessions.map(session => {
	// 	return <CinemaHall session={session}/>
	// });

	// console.log(sessionsOnPage);

	console.log('RENDER SESSION DETAILS');

	return (
		<div class="session-details">

			<div class="session-details__cinema-name">GRAND LONDON CINEMA</div>

			<div class="session-details__cinema-adress">Palm Street, 49</div>

			{
				hallsOnPage
			}

			{/* {
				sessionsOnPage
			} */}

		</div>
	);
}

export default SessionDetails;