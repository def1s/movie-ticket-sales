import './advertisement.scss';
import Slider from '../slider/Slider';

import arrayToLeft from '../../imgs/arrow-left.png';
import arrayToRight from '../../imgs/arrow-right.png';
import jon from '../../imgs/jon.png';

const Advertisement = ({modificators}) => {

	const ads = (
		<div class="advertisement__item">
			<h2 class="advertisement__title">SEWA/BELI FILM dan SERIAL di TIX ID sekarang!</h2>

			<img class="advertisement__cover" src={jon} alt='jon'></img>
		</div>
	);

	const adsOnPage = [];

	for (let i = 0; i < 3; i++) {
		adsOnPage.push(ads);
	}

	return (

		<section className="advertisement advertisement_mt-90">
			<div className="container">

				<Slider marginRight={0} itemWidht={1300} slides={adsOnPage} numOfVisibleSlides={1}/>

			</div>
		</section>

	);
}

export default Advertisement;