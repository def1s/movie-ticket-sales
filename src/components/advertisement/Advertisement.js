import './advertisement.scss';

import arrayToLeft from '../../imgs/arrow-left.png';
import arrayToRight from '../../imgs/arrow-right.png';

const Advertisement = ({modificators}) => {

	return (
		<section class={`advertisement ${modificators}`}>
			<div class="container">

				<div class="advertisement__wrapper advertisement__wrapper_position-relative">
					<img src={arrayToLeft} alt="arrow-to-left" class="arrow arrow_position-absolute arrow_left-50-percents"></img>

					<div class="advertisement__slider">

						<div class="advertisement__item">
							<h2 class="advertisement__title">SEWA/BELI FILM dan SERIAL di TIX ID sekarang!</h2>

							<img class="advertisement__cover" src="./img/jon.png"></img>
						</div>

					</div>

					<div class="nav-dots">
						<div class="nav-dots__dot"></div>
						<div class="nav-dots__dot"></div>
						<div class="nav-dots__dot"></div>
					</div>

					<img src={arrayToRight} alt="arrow-to-right" class="arrow arrow_position-absolute arrow_right-50-percents "></img>	
				</div>

			</div>
		</section>
	);
}

export default Advertisement;