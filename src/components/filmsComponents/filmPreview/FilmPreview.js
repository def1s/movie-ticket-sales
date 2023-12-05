import './filmPreview.scss';

import Order from '../../orderComponents/order/Order';
import { useSelector } from 'react-redux';

const FilmPreview = () => {
	const film = useSelector(state => state.films.selectedFilm);

	return (
		<div className="film-preview film-preview_ml">

			<div className="film-preview__descr">
				<div className="film-preview__cover">
					<img src={film.cover} alt=""></img>
				</div>
				<div className="film-preview__title">{film.title ? film.title : null}</div>
				
				<div className="film-preview__wrapper">
					<div className="film-preview__label">Genre:</div>
					<div className="film-preview__info">Action</div>
				</div>

				<div className="film-preview__wrapper">
					<div className="film-preview__label">Duration:</div>
					<div className="film-preview__info">2 hours 28 minutes</div>
				</div>

				<div className="film-preview__wrapper">
					<div className="film-preview__label">Director:</div>
					<div className="film-preview__info">Jon Watts</div>
				</div>

				<div className="film-preview__wrapper">
					<div className="film-preview__label">Rating:</div>
					<div className="film-preview__info">PG-13</div>
				</div>

			</div>

			<Order/>

		</div>
	);
}

export default FilmPreview;