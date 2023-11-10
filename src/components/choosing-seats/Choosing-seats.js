import './choosing-seats.scss';

import Seats from '../seats/Seats';

const ChoosingSeats = () => {
	
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
						<div class="choosing-seats__current-selection">20$</div>
					</div>

					<div class="choosing-seats__info">
						<div class="choosing-seats__title">Seats:</div>
						<div class="choosing-seats__current-selection">A1, A2</div>
					</div>

					<button class="choosing-seats__button choosing-seats__button_reset">Reset</button>
					<button class="choosing-seats__button choosing-seats__button_confirm">CONFIRM</button>

				</div>

			</div>

		</section>
	);
}

export default ChoosingSeats;