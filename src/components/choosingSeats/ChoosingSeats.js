import './choosingSeats.scss';

import Seats from '../seats/Seats';

import { useDispatch, useSelector } from 'react-redux';

import { ticketsSelectedReset } from '../../slices/tickets';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ChoosingSeats = () => {
	const { film_id } = useParams();

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
		<section className="choosing-seats">
			<div className="container">

			
				<div className="choosing-seats__header">CHOOSE A SEAT</div>

				<div className="choosing-seats__descr">
					Choose the seats you will occupy during the screening
				</div>

				<Seats/>

			</div>

			<div className="choosing-seats__movie-screen">The movie screen is here</div>

			<div className="container">

				<div className="choosing-seats__preview">
					<div className="choosing-seats__info">
						<div className="choosing-seats__title">Total:</div>
						<div className="choosing-seats__current-selection">{selectedSeats.length * seatCost}$</div>
					</div>

					<div className="choosing-seats__info">
						<div className="choosing-seats__title">Seats:</div>
						<div className="choosing-seats__current-selection">{renderSelectedSeats(selectedSeats)}</div>
					</div>

					<button className="choosing-seats__button choosing-seats__button_reset" onClick={() => dispatch(ticketsSelectedReset())}>Reset</button>
					<Link to={`/order-movie/${film_id}/confirm-payment`}><button disabled={!selectedSeats.length} className="choosing-seats__button choosing-seats__button_confirm">CONFIRM</button></Link>
					{/* костыль? */}

				</div>

			</div>

		</section>
	);
}

export default ChoosingSeats;