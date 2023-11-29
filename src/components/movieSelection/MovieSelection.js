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

const MovieSelection = () => {
	const { getFilms } = useCinemaServices();
	const dispatch = useDispatch();
	const films = useSelector(state => state.films.films);

	//получаем при первом рендере список фильмов
	useEffect(() => {
		//dispatch(filmsFetching); //добавить
		getFilms('/api/films')
			.then(result => dispatch(filmsFetched(result.data)))
			.catch(err => console.log(err));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const renderFilms = films.map((film, index) => { //рендер фильмов
		return <Link className='movie_mr-82 movie' to={`/order-movie/${film.film_id}`}><Movie cover={film.cover} title={film.title} key={index}/></Link>
	});

	return (
		<section className="movie-selection movie-selection_mt-80">


			<div className="container">

				{!renderFilms.length ? <Spinner/> : null} {/* сделать по-другому */}
				<Slider marginRight={82} itemWidht={500} slides={renderFilms} numOfVisibleSlides={2}/> 

			</div>
		</section>
	);
}

export default MovieSelection;