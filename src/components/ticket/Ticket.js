import './ticket.scss';
import locationSvg from '../../imgs/location.svg';

const Ticket = ({ title, date, cover, hallName, seat, mods }) => {

	const formatDate = () => {
		let hours = date.getHours();
		let minutes = date.getMinutes();
		const dayOfMonth = date.getDate();
		const month = date.toLocaleString('en-US', {month: 'long'});
		const year = date.getFullYear();

		if (hours < 10) {
			hours = '0' + hours;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		return `${dayOfMonth} ${month} ${year}, ${hours}:${minutes}`;
	};

	/*
		как работает конвертация:
		1. Вычесть 1 из `seat` для получения нулевого индекса (так как в оригинальном коде при подсчете `seat` прибавлялась единица).
		2. Определить номер ряда, разделив `seat - 1` на количество мест в ряду и округлив результат в меньшую сторону. Это даст нам индекс ряда.
		3. Определить номер места в ряду, взяв остаток от деления `seat - 1` на количество мест в ряду.
		4. Добавить 65 (код символа 'A') к индексу ряда, чтобы получить символ Unicode для буквенного обозначения ряда.
		5. Перевести числовой код символа Unicode в символ.
		6. Сформировать стандартное обозначение места, прибавив 1 к номеру места, так как индексация мест начинается с 1.
	 */
	const convertSeat = (seat, seastInRow = 20) => {
		const unicodeSymbol = 65; //65 - A
		const zeroBasedIndex = seat - 1; //нормализация индекса - начинается с 0
		const rowIndex = Math.floor(zeroBasedIndex / seastInRow); //находим индекс ряда
		const seatNum = zeroBasedIndex % seastInRow + 1; //номер места в ряду
		const rowLetter = String.fromCharCode(unicodeSymbol + rowIndex); //преобразование индекса ряда в букву
		return `${rowLetter}${seatNum}`; //возвращаем результат
	};

	const renderStatus = () => {
		let className = 'ticket__status ';
		let label = '';

		if (date.getTime() < Date.now()) {
			className += 'ticket__status_unavailable';
			label = 'Unavailable';
		} else {
			className += 'ticket__status_available';
			label = 'Available';
		}

		return <div className={className}>{label}</div>;
	};

	return (
		<div className={`ticket ${mods}`}>
			<div className="ticket__wrapper">

				<img src={cover} alt="movie cover" className="ticket__cover" />
				<div className="ticket__descr">
					<div className="ticket__title">{title}</div>
					<div className="ticket__date">{formatDate()}</div>
					<div className="ticket__address">
						<img src={locationSvg} alt="location" className='ticket__icon'/>
						London, Palm Street 49
					</div>
					<div className="ticket__seat">Hall: {hallName}  Seat: <span className='bold'>{convertSeat(seat)}</span></div>
				</div>
			</div>

			{ renderStatus() }

		</div>
	);
}

export default Ticket;