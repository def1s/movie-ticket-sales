import './movieSelection.scss';
import '../movie/movie.scss';

import Movie from '../movie/Movie';
import Slider from '../slider/Slider';
import useCinemaServices from '../../services/CinemaServices';
import Spinner from '../spinner/Spinner';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { filmsFetched } from '../../slices/films';
import ErrorMessage from "../errorMessage/ErrorMessage";

const MovieSelection = () => {
	const { getData, loading, error, clearError } = useCinemaServices();
	const dispatch = useDispatch();
	const films = useSelector(state => state.films.films);

	//получаем при первом рендере список фильмов
	useEffect(() => {
		clearError();
		getData('/api/films')
			.then(result => dispatch(filmsFetched(result.data)))
			.catch(err => console.log(err));
	}, []);

	const renderFilms = films.map((film, index) => { //рендер фильмов
		return (
			<Link className='movie movie_mr-10' to={`/order-movie/${film.film_id}`}>
				<Movie
					cover={film.cover}
					title={film.title}
					key={index}
					movieMods='movie_wigth-379'
					movieTitleMods='movie__title_font-size-24'
					movieCoverMods='movie__cover_height-507'
				/>
			</Link>
		)
	});

	const errorMessage = error ? <ErrorMessage/> : null;
	const spinner = loading ? <Spinner/> : null;
	const content = !(errorMessage || spinner) ? <Slider marginRight={10} itemWidht={379} slides={renderFilms} numOfVisibleSlides={3}/> : null;

	return (
		<section className="movie-selection movie-selection_mt-80">

			<div className="container">

				{ errorMessage }
				{ spinner }
				{ content }

			</div>
		</section>
	);
}

export default MovieSelection;