import './session-details.scss';

import CinemaHall from '../cinema-hall/Cinema-hall';

const SessionDetails = () => {
	return (
		<div class="session-details">

			<div class="session-details__cinema-name">GRAND LONDON CINEMA</div>

			<div class="session-details__cinema-adress">Palm Street, 49</div>

			<CinemaHall/>
			<CinemaHall/>
			<CinemaHall/>

		</div>
	);
}

export default SessionDetails;