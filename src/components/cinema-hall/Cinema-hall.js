import './cinema-hall.scss';

const CinemaHall = () => {
	return (
		<div class="cinema-hall">

			<div class="cinema-hall__info">
				<div class="cinema-hall__name">REGULAR 2D</div>
				<div class="cinema-hall__cost">10$</div>
			</div>

			<div class="cinema-hall__times">
				<div class="cinema-hall__time cinema-hall__time_occupied">11:00</div>
				<div class="cinema-hall__time cinema-hall__time_occupied">11:00</div>
				<div class="cinema-hall__time cinema-hall__time_current">11:00</div>
				<div class="cinema-hall__time">11:00</div>
				<div class="cinema-hall__time">11:00</div>
				<div class="cinema-hall__time">11:00</div>
				<div class="cinema-hall__time">11:00</div>
			</div>

		</div>
	);
}

export default CinemaHall;