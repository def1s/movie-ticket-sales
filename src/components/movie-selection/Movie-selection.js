import './movie-selection.scss';
import '../movie/movie.scss';

import Movie from '../movie/Movie';
import Slider from '../slider/Slider';
import cover from '../../imgs/cover1.png';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filmsFetched } from '../../slices/films';

import useCinemaServices from '../../services/CinemaServices';

const MovieSelection = () => {
	const { getFilms } = useCinemaServices();
	const dispatch = useDispatch();
	const films = useSelector(state => state.films.films);

	useEffect(() => {
		//dispatch(filmsFetching); //добавить
		getFilms('/films')
			.then(result => dispatch(filmsFetched(result)))
			.catch(err => console.log(err));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [getFilms]);

	const renderFilms = films.map((film, index) => {
		return <Link className='movie_mr-82' to={`/order-movie/${film.film_id}`}><Movie cover={cover} title={film.title} key={index}/></Link>
	});

	return (
		<section class="movie-selection movie-selection_mt-80">
			<div class="container">

				<Slider marginRight={82} itemWidht={500} slides={renderFilms} numOfVisibleSlides={2}/> 

			</div>
		</section>
	);
}

export default MovieSelection;