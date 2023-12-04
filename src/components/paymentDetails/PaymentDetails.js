import './paymentDetails.scss';

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
		<div className="payment-details">
			<div className="payment-details__info">Payment details</div>

			<div className="payment-details__title">Film:</div>
			<div className="payment-details__info">{film.title.toUpperCase()}</div>
			<div className="divider divider_mt-17"></div>

			<div className="payment-details__title">Address:</div>
			<div className="payment-details__info">LONDON, {renderDate(time)}</div>
			<div className="divider divider_mt-17"></div>

			<div className="payment-details__field">
				<div className="payment-details__wrapper">
					<div className="payment-details__title">Hall:</div>
					<div className="payment-details__info">{hallName}</div>
				</div>

				<div className="payment-details__wrapper">
					<div className="payment-details__title">Time:</div>
					<div className="payment-details__info">{renderTime(time)}</div>
				</div>
			</div>
			<div className="divider divider_mt-17"></div>

			<div className="payment-details__title">Tickets:</div>
			<div className="payment-details__info">{renderSelectedTickets(tickets)}</div>
			<div className="divider divider_mt-17"></div>

			<a className="payment-details__back" onClick={() => navigate(-1)}>Back</a>
		</div>			
	)
}

export default PaymentDetails;