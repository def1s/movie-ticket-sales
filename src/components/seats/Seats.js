import './seats.scss';

import useCinemaServices from '../../services/CinemaServices';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ticketsFetched, ticketsSelected } from '../../slices/tickets';

const Seats = () => {
	const dispatch = useDispatch();
	const { getTickets } = useCinemaServices();

	const tickets = useSelector(state => state.tickets.tickets);
	const sessionId = useSelector(state => state.sessions.currentSessionId);
	let time = useSelector(state => state.times.selectedTime);
	time = new Date(time);

	useEffect(() => {
		getTickets(`/tickets/${sessionId}`)
			.then(result => dispatch(ticketsFetched(result)))
			.catch(err => console.log(err));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderSeats = (rows, seatsInRow) => {
		let seats = [];
		let unicodeSymbol = 65;

		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < seatsInRow; j++) {
				let classNames = 'seats__seat';

				for (let k = 0; k < tickets.length; k++) {
					if ((i * seatsInRow + j + 1) === tickets[k].ticket_id) {
						classNames += ' occupied-seat';
					}
				}
				//сделать в неск. строк
				seats.push(<div className={classNames} key={i * seatsInRow + j + 1} onClick={() => dispatch(ticketsSelected(i * seatsInRow + j + 1))}>{`${String.fromCharCode(unicodeSymbol)}${j + 1}`}</div>);
			}
			unicodeSymbol++;
		}

		return seats;
	};

	const renderTime = (time) => { //повторяется, вынести
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

	const seats = renderSeats(8, 20);

	return (
		<div class="seats">
			<div class="seats__info">
				<div class="seats__time">{renderTime(time)}</div>

				<div class="seats__descr">
					<div class="seats__status">

						<div class="seats__color occupied-seat"></div>
						<div class="seats__name">Occupied</div>

					</div>

					<div class="seats__status">

						<div class="seats__color empty-seat"></div>
						<div class="seats__name">Empty</div>

					</div>

					<div class="seats__status">

						<div class="seats__color selected-seat"></div>
						<div class="seats__name">Selected</div>

					</div>
				</div>
			</div>
				
			<div class="seats__grid">
				{
					seats
				}
			</div>

		</div>
	);
}

export default Seats;