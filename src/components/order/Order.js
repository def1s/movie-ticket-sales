import './order.scss';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Order = () => {
	const { selectedDate, selectedTime } = useSelector(state => state.times);

	const renderDate = (date) => {
		date = new Date(date);
		return (`${date.getDate()} ${date.toLocaleString('en-US', {month: 'long'})} ${date.getFullYear()}`);
	};

	const renderTime = (time) => { //повторяется, вынести в функ
		time = new Date(time);

		if (time.getTime() === 0) {
			return 'Time pls';
		}

		let hours = time.getHours();
		let minutes = time.getMinutes();

		if (hours < 10) { //мб в функцию вынести, но мало кода, не знаю
			hours = '0' + hours;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		return (`${hours}:${minutes}`);
	};

	return (
		<div class="order">

			{
				new Date(selectedDate).getTime() === 0 ? 

					<h2>Date pls</h2> :

					 <View 
					 	selectedDate={selectedDate} 
						selectedTime={selectedTime} 
						renderTime={renderTime} 
						renderDate={renderDate}
					/>
 			}
		</div>
	);
}

const View = ({ selectedDate, selectedTime, renderDate, renderTime }) => {
	return (
		<>
			<div class="order__cinema-name">GRAND LONDON CINEMA</div>

			<div class="order__date">{renderDate(selectedDate)}</div>

			<div class="order__session-info">
				<div class="order__hall-name">REGULAR 2D</div>
				<div class="order__time">{renderTime(selectedTime)}</div>
			</div>

			<Link to={`choosing-seat`}><button class="order__confirm-button">CONFIRM</button></Link>
		</>
	)
}

export default Order;