import './date-selection.scss';

import Slider from '../slider/Slider';

import { useSelector, useDispatch } from 'react-redux';
import { dateIndexSelecting, dateSelecting } from '../../slices/times';
 
const DateSelection = ({ sessions }) => {
	const dispatch = useDispatch();
	const selectedDateIndex = useSelector(state => state.times.selectedDateIndex);

	const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	const uniqueDates = []; //подумать о другом решении

	const renderDates = sessions.map((session, index) => {
		if (uniqueDates.includes(`${session.start_time.getDate()} ${session.start_time.getMonth()}`)) { //выводим только уникальные даты
			// eslint-disable-next-line array-callback-return
			return;
		} else {
			uniqueDates.push(`${session.start_time.getDate()} ${session.start_time.getMonth()}`);
		}

		let stylesBlock = '';
		let stylesWeekday = '';

		if (selectedDateIndex === index) {
			stylesBlock = 'date-selection__date_current';
			stylesWeekday = 'date-selection__weekday_current';
		}

		return (
			<div 
				class={`date-selection__date ${stylesBlock}`}
				key={index} 
				onClick={() => {
					dispatch(dateSelecting(session.start_time.getTime()));
					dispatch(dateIndexSelecting(index));
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

			<Slider marginRight={24} itemWidht={86} numOfVisibleSlides={5} slides={renderDates}/>

		</div>
	);
}

export default DateSelection;