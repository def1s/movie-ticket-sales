import './payment-details.scss';

import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PaymentDetails = () => {
	const navigate = useNavigate();

	const tickets = useSelector(state => state.tickets.selectedTickets);
	const time = new Date(useSelector(state => state.times.selectedTime));
	const film = useSelector(state => state.films.selectedFilm);
	const hallName = useSelector(state => state.halls.selectedHallName);

	const renderSelectedTickets = (tickets) => {
		return tickets.map((ticket, index) => {
			if (index === tickets.length - 1) {
				return ticket.name;
			}

			return ticket.name + ', ';
		});
	};

	const renderDate = (date) => {
		return `${date.getDate()} ${date.toLocaleString('en-US', {month: 'long'}).toUpperCase()} ${date.getFullYear()}`;
	};

	const renderTime = (time) => {
		let hours = time.getHours();
		let minutes = time.getMinutes();

		if (hours < 10) { //мб в функцию вынести, но мало кода, не знаю
			hours = '0' + hours;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		return `${hours}:${minutes}`;
	}

	return (
		<div class="payment-details">
			<div class="payment-details__info">Payment details</div>

			<div class="payment-details__title">Film:</div>
			<div class="payment-details__info">{film.title.toUpperCase()}</div>
			<div class="divider divider_mt-17"></div>

			<div class="payment-details__title">Adress:</div>
			<div class="payment-details__info">LONDON, {renderDate(time)}</div>
			<div class="divider divider_mt-17"></div>

			<div class="payment-details__field">
				<div class="payment-details__wrapper">
					<div class="payment-details__title">Hall:</div>
					<div class="payment-details__info">{hallName}</div>
				</div>

				<div class="payment-details__wrapper">
					<div class="payment-details__title">Time:</div>
					<div class="payment-details__info">{renderTime(time)}</div>
				</div>
			</div>
			<div class="divider divider_mt-17"></div>

			<div class="payment-details__title">Tickets:</div>
			<div class="payment-details__info">{renderSelectedTickets(tickets)}</div>
			<div class="divider divider_mt-17"></div>

			<a class="payment-details__back" onClick={() => navigate(-1)}>Back</a>
		</div>			
	)
}

export default PaymentDetails;