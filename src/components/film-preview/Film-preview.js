import './film-preview.scss';

import cover from '../../imgs/cover2.png';

import Order from '../order/Order';

const FilmPreview = () => {
	return (
		<div class="film-preview film-preview_ml">

			<div class="film-preview__descr">
				<div class="film-preview__cover">
					<img src={cover} alt=""></img>
				</div>
				<div class="film-preview__title">SPIDER-MAN: NO WAY HOME</div>
				
				<div class="film-preview__wrapper">
					<div class="film-preview__label">Genre:</div>
					<div class="film-preview__info">Action</div>
				</div>

				<div class="film-preview__wrapper">
					<div class="film-preview__label">Duration:</div>
					<div class="film-preview__info">2 hours 28 minutes</div>
				</div>

				<div class="film-preview__wrapper">
					<div class="film-preview__label">Director:</div>
					<div class="film-preview__info">Jon Watts</div>
				</div>

				<div class="film-preview__wrapper">
					<div class="film-preview__label">Rating:</div>
					<div class="film-preview__info">PG-13</div>
				</div>

			</div>

			<Order/>

			{/* <div class="order">
				<div class="order__cinema-name">GRAND LONDON CINEMA</div>

				<div class="order__date">15 December 2023</div>

				<div class="order__session-info">
					<div class="order__hall-name">REGULAR 2D</div>
					<div class="order__time">11:00</div>
				</div>

				<a class="order__confirm-button" href="./chooise.html">CONFIRM</a> 
			</div> */}

		</div>
	);
}

export default FilmPreview;