import './dateSelection.scss';

import Slider from '../slider/Slider';

import { useSelector, useDispatch } from 'react-redux';
import { dateIndexSelecting, dateSelecting, dateReset, timeReset } from '../../slices/times';
import { sessionIdReset } from '../../slices/sessions';
import { useEffect } from 'react';
 
const DateSelection = ({ sessions }) => {
	const dispatch = useDispatch();
	const selectedDateIndex = useSelector(state => state.times.selectedDateIndex);

	useEffect(() => { //при первом рендере сбрасывается время, а также при изменении выбранной даты
		dispatch(timeReset());
		dispatch(sessionIdReset()); //а также сбрасывается id выбранной сессии
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [selectedDateIndex]);

	useEffect(() => {
		dispatch(dateReset()); //при первом рендере сбрасывается дата
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const uniqueDates = new Set();

	const renderDates = sessions.map((session, index) => {
		if (!uniqueDates.has(`${session.start_time.getDate()} ${session.start_time.getMonth()}`)) {
			uniqueDates.add(`${session.start_time.getDate()} ${session.start_time.getMonth()}`);
		} else {
			return;
		}

		let stylesBlock = 'date-selection__date';
		let stylesWeekday = 'date-selection__weekday ';

		if (selectedDateIndex === index) {
			stylesBlock += ' date-selection__date_current';
			stylesWeekday += ' date-selection__weekday_current';
		}

		return (
			<div 
				className={stylesBlock}
				key={index} 
				onClick={() => {
					dispatch(dateSelecting(session.start_time.getTime()));
					dispatch(dateIndexSelecting(index));
				}}
			>
				<div className="date-selection__number">
					{session.start_time.getDate()} {session.start_time.toLocaleString('en-US', {month: 'short'})}
				</div>
				<div className={stylesWeekday}>{daysOfWeek[session.start_time.getDay()]}</div>
			</div>
		);
	});

	// console.log('RENDER DATE SELECTION');

	return (
		<div className="date-selection">

			<Slider marginRight={24} itemWidht={86} numOfVisibleSlides={5} slides={renderDates}/>

		</div>
	);
}

export default DateSelection;