import './seats.scss';

const Seats = () => {

	const makeSeats = (rows, seatsInRow) => {
		let seats = [];
		let unicodeSymbol = 65;
		let uniqueKey = 0; //подумать о более красивом решении

		for (let i = 0; i < rows; i++) {
			for (let j = 0; j < seatsInRow; j++) {
				seats.push(<div class="seats__seat" key={uniqueKey}>{`${String.fromCharCode(unicodeSymbol)}${j + 1}`}</div>);
				uniqueKey++;
			}
			unicodeSymbol++;
		}

		return seats;
	}

	const seats = makeSeats(8, 20);

	return (
		<div class="seats">
			<div class="seats__info">
				<div class="seats__time">14:40</div>

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
`
		</div>
	);
}

export default Seats;