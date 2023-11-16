import './date-selection.scss';

import Slider from '../slider/Slider';
import { useEffect, useState } from 'react';

 
const DateSelection = ({ sessions, getSelectedDate }) => {
	const [sortedSessions, setSortedSessions] = useState([]);
	const [currentIndexDate, setCurrentIndexDate] = useState(-1);

	useEffect(() => {
		const updatedSessions = sessions.map(session => ({
			...session,
			start_time: new Date(session.start_time)
		})).sort((a, b) => a.start_time - b.start_time);


		setSortedSessions(updatedSessions);
	}, [sessions]);

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const uniqueDates = [];

	const dateOnPage = sortedSessions.map((session, index) => {
		if (uniqueDates.includes(`${session.start_time.getDate()} ${session.start_time.getMonth()}`)) { //выводим только уникальные даты
			return;
		} else {
			uniqueDates.push(`${session.start_time.getDate()} ${session.start_time.getMonth()}`);
		}

		let stylesBlock = '';
		let stylesWeekday = '';

		if (currentIndexDate == index) {
			stylesBlock = 'date-selection__date_current';
			stylesWeekday = 'date-selection__weekday_current';
		}

		return (
			<div 
				class={`date-selection__date ${stylesBlock}`}
				key={index} 
				onClick={() => {
					getSelectedDate(session.start_time);
					setCurrentIndexDate(index);
				}}
			>
				<div class="date-selection__number">
					{session.start_time.getDate()} {session.start_time.toLocaleString('en-US', {month: 'short'})}
				</div>
				<div class={`date-selection__weekday ${stylesWeekday}`}>{daysOfWeek[session.start_time.getDay()]}</div>
			</div>
		);
	});

	console.log('RENDER DATE SELECTION');

	return (
		<div class="date-selection">

			<Slider marginRight={24} itemWidht={86} numOfVisibleSlides={5} slides={dateOnPage}/>

		</div>
	);
}

export default DateSelection;