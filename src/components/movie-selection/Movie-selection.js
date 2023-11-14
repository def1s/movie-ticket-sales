import './movie-selection.scss';

import Movie from '../movie/Movie';
import useCinemaServices from '../../services/CinemaServices';
import Slider from '../slider/Slider';
import { useEffect, useState } from 'react';

import cover from '../../imgs/cover1.png';
import arrayToLeft from '../../imgs/arrow-left.png';
import arrayToRight from '../../imgs/arrow-right.png';

import { Link } from 'react-router-dom';

const MovieSelection = () => {
	const {getFilms} = useCinemaServices();

	const [films, setFilms] = useState([]);
	const [innerWidth, setInnerWidth] = useState(0);
	const [position, setPosition] = useState(0);
	
	const _widthOfItem = 582;

	useEffect(() => {
		setInnerWidth(films.length * 500 + (films.length - 1) * 82);
	}, [films]);

	useEffect(() => {
		getFilms('/films').then(res => setFilms(res));
	}, []);

	const handlePosition = (i) => {

		if ((position + i) * 582 < 0) {
			return;
		}

		if ((position + i) * 582 >= innerWidth -  582) {
			return;
		}

		setPosition(position => position + i);
	}

	const filmsOnPage = films.map((film, index) => {
		return <Link to={'/order-movie'}><Movie cover={cover} title={film.title} key={index}/></Link>
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