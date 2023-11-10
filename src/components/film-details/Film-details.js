import './film-details.scss';

import DateSelection from '../date-selection/Date-selection';
import SessionDetails from '../session-details/Session-details';
import Divider from '../divider/Divider';

const FilmDetails = () => {
	return (
		<div class="film-details">

			<div class="film-details__label">CHART</div>

			<DateSelection/>

			<Divider mods={'divider_mt'}/>

			<SessionDetails/>

			{/* <div class="session-details">

				<div class="session-details__cinema-name">GRAND LONDON CINEMA</div>

				<div class="session-details__cinema-adress">Palm Street, 49</div>

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

				<div class="cinema-hall">

					<div class="cinema-hall__info">
						<div class="cinema-hall__name">REGULAR 2D</div>
						<div class="cinema-hall__cost">10$</div>
					</div>

					<div class="cinema-hall__times">
						<div class="cinema-hall__time">11:00</div>
						<div class="cinema-hall__time">11:00</div>
					</div>

				</div>

				<div class="cinema-hall">

					<div class="cinema-hall__info">
						<div class="cinema-hall__name">REGULAR 2D</div>
						<div class="cinema-hall__cost">10$</div>
					</div>

					<div class="cinema-hall__times">
						<div class="cinema-hall__time">11:00</div>
						<div class="cinema-hall__time cinema-hall__time_occupied">11:00</div>
						<div class="cinema-hall__time">11:00</div>
						<div class="cinema-hall__time">11:00</div>
						<div class="cinema-hall__time">11:00</div>
					</div>

				</div>

			</div> */}

		</div>
	);
}

export default FilmDetails;