import './choosing-seats.scss';

import Seats from '../seats/Seats';

import { useDispatch, useSelector } from 'react-redux';

import { ticketsSelectedReset } from '../../slices/tickets';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ChoosingSeats = () => {
	const dispatch = useDispatch();

	useEffect(() => { //при первом заходе на стр сбрасываются выбранные места, которые могли остаться с прошлого выбора
		dispatch(ticketsSelectedReset());
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const selectedSeats = useSelector(state => state.tickets.selectedTickets);
	// const seatCost = useSelector(state => state.halls.selectedHallCost);
	const seatCost = useSelector(state => state.cost.currentSeatCost);

	const renderSelectedSeats = (seats) => { //нужно ли принимать аргументом места или можно обращаться к ним просто так?
		if (!seats.length) {
			return 'Pls seats';
		}

		return seats.map((seat, index) => {
			if (index === seats.length - 1) {
				return seat.name;
			}
			
			return seat.name + ', ';
		});
	}

	return (
		<section class="choosing-seats">
			<div class="container">

			
				<div class="choosing-seats__header">CHOOSE A SEAT</div>

				<div class="choosing-seats__descr">
					Choose the seats you will occupy during the screening
				</div>

				<Seats/>

			</div>

			<div class="choosing-seats__movie-screen">The movie screen is here</div>

			<div class="container">

				<div class="choosing-seats__preview">
					<div class="choosing-seats__info">
						<div class="choosing-seats__title">Total:</div>
						<div class="choosing-seats__current-selection">{selectedSeats.length * seatCost}$</div>
					</div>

					<div class="choosing-seats__info">
						<div class="choosing-seats__title">Seats:</div>
						<div class="choosing-seats__current-selection">{renderSelectedSeats(selectedSeats)}</div>
					</div>

					<button class="choosing-seats__button choosing-seats__button_reset" onClick={() => dispatch(ticketsSelectedReset())}>Reset</button>
					<Link to={'confirm-payment'}><button class="choosing-seats__button choosing-seats__button_confirm">CONFIRM</button></Link>

				</div>

			</div>

		</section>
	);
}

export default ChoosingSeats;