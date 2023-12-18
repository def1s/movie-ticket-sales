import './advertisement.scss';
import Slider from '../slider/Slider';

import jon from '../../imgs/jon.png';

const Advertisement = ({modificators}) => {

	const ads = (
		<div className="advertisement__item">
			<h2 className="advertisement__title">Rent / buy movies and series on TIX ID now!</h2>

			<img className="advertisement__cover" src={jon} alt='jon'></img>
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