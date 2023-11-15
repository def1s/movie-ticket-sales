import './movie-selection.scss';
import '../movie/movie.scss';

import Movie from '../movie/Movie';
import useCinemaServices from '../../services/CinemaServices';
import Slider from '../slider/Slider';
import { useEffect, useState } from 'react';

import cover from '../../imgs/cover1.png';

import { Link } from 'react-router-dom';

const MovieSelection = () => {
	const {getFilms} = useCinemaServices();

	const [films, setFilms] = useState([]);

	useEffect(() => {
		getFilms('/films').then(res => setFilms(res));
	}, []);

	const filmsOnPage = films.map((film, index) => {
		return <Link className='movie_mr-82' to={`/order-movie/${film.film_id}`}><Movie cover={cover} title={film.title} key={index}/></Link>
	});

	return (
		<section class="movie-selection movie-selection_mt-80">
			<div class="container">

				<Slider marginRight={82} itemWidht={500} slides={filmsOnPage} numOfVisibleSlides={2}/> 

			</div>
		</section>
	);
}

export default MovieSelection;