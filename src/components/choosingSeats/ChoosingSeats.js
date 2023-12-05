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
	}, []);

	const selectedSeats = useSelector(state => state.tickets.selectedTickets);
	const seatCost = useSelector(state => state.cost.currentSeatCost);

	const renderSelectedSeats = (seats) => {
		if (!seats.length) { //если нет выбранных мест
			return 'CHOOSE THE PLACE!';
		}

		return seats.map((seat, index) => {
			if (index === seats.length - 1) { //для последнего элемента не рисуем запятую в конце
				return seat.name;
			}
			
			return seat.name + ', ';
		});
	};

	const onReset = () => {
		dispatch(ticketsSelectedReset());
	};

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

					<button className="choosing-seats__button choosing-seats__button_reset" onClick={onReset}>Reset</button>

					<Link 
						disabled={!selectedSeats.length} 
						className="choosing-seats__button choosing-seats__button_confirm choosing-seats__button_pt-12"
						to={`/order-movie/${film_id}/confirm-payment`}
					>CONFIRM</Link>
				</div>

			</div>

		</section>
	);
}

export default ChoosingSeats;