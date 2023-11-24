import './film-preview.scss';
import cover from '../../imgs/cover2.png';

import Order from '../order/Order';
import { useSelector } from 'react-redux';

const FilmPreview = () => {
	const film = useSelector(state => state.films.selectedFilm);
	const imageUrl = `data:image/jpeg;base64,${film.cover}`;

	return (
		<div class="film-preview film-preview_ml">

			<div class="film-preview__descr">
				<div class="film-preview__cover">
					<img src={imageUrl} alt=""></img>
				</div>
				<div class="film-preview__title">{film.title ? film.title : null}</div>
				
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

		</div>
	);
}

export default FilmPreview;