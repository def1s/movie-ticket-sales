import './movie-selection.scss';

import Movie from '../movie/Movie';

import cover from '../../imgs/cover1.png';
import arrayToLeft from '../../imgs/arrow-left.png';
import arrayToRight from '../../imgs/arrow-right.png';

const MovieSelection = () => {
	return (
		<section class="movie-selection movie-selection_mt-80">
			<div class="container">

				<div class="movie-selection__wrapper">

					<img class="arrow" src={arrayToLeft}></img>

					<div class="movie-selection__slider">

						<Movie cover={cover}/>
						<Movie cover={cover}/>
						
					</div>

					<img class="arrow" src={arrayToRight}></img>

				</div>

			</div>
		</section>
	);
}

export default MovieSelection;