import './seats.scss';

import useCinemaServices from '../../services/CinemaServices';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ticketsFetched, ticketsSelected } from '../../slices/tickets';

const Seats = () => {
	const dispatch = useDispatch();
	const { getTickets } = useCinemaServices();

	const { tickets, selectedTickets} = useSelector(state => state.tickets); //selectedTickets - индексы выбранных билетов, tickets - массив с объектами билетов
	const sessionId = useSelector(state => state.sessions.currentSessionId);
	let time = useSelector(state => state.times.selectedTime);
	time = new Date(time);

	useEffect(() => {
		getTickets(`/api/tickets/${sessionId}`)
			.then(result => dispatch(ticketsFetched(result.data)))
			.catch(err => console.log(err));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onSelectingSeat = (index, name) => { //должна ли она принимать стейт, а не брать его из-за области ф-и?
		for (const ticket of tickets) {
			if (ticket.ticket_id === index) {
				return;
			}
		}

		dispatch(ticketsSelected({index, name}));
	}

	const renderSeats = (rows, seatsInRow) => {
		let seats = [];
		let unicodeSymbol = 65;

		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < seatsInRow; j++) {
				let classNames = 'seats__seat';
				const key = i * seatsInRow + j + 1;

				//проверка на занятость места исходя из того, содержится ли оно в полученных билетах с бд
				const isOccupied = tickets.some(ticket => ticket.ticket_id === key);
				//проверка на то, выбран ли билет пользователем
				const isSelected = selectedTickets.some(ticket => ticket.index === key);

				classNames += isOccupied ? ' occupied-seat' : '';
				classNames += isSelected ? ' selected-seat' : '';

				const name = `${String.fromCharCode(unicodeSymbol)}${j + 1}`;

				seats.push(<div className={classNames} key={key} onClick={() => onSelectingSeat(key, name)}>{name}</div>);
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
		<div className="seats">
			<div className="seats__info">
				<div className="seats__time">{renderTime(time)}</div>

				<div className="seats__descr">
					<div className="seats__status">

						<div className="seats__color occupied-seat"></div>
						<div className="seats__name">Occupied</div>

					</div>

					<div className="seats__status">

						<div className="seats__color empty-seat"></div>
						<div className="seats__name">Empty</div>

					</div>

					<div className="seats__status">

						<div className="seats__color selected-seat"></div>
						<div className="seats__name">Selected</div>

					</div>
				</div>
			</div>
				
			<div className="seats__grid">
				{
					seats
				}
			</div>

		</div>
	);
}

export default Seats;