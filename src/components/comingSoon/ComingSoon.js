import './comingSoon.scss';

import Preface from '../preface/Preface';
import Movie from '../movieComponents/movie/Movie';

import cover from '../../imgs/cover1.png';

const ComingSoon = () => {
	return (
		<section className="coming-soon coming-soon_mt-80">
			<div className="container">

				<Preface
					title={'Coming soon...'}
					descr={'The latest news about the world of cinema for you!'}
					link={null}
				/>

				<div className="coming-soon__movies">

					<Movie 
						movieMods={'movie_wigth-379'} 
						movieTitleMods='movie__title_font-size-24 movie__title_text-align-left'
						movieTagsMods='movie__tags_jc-left'
						movieCoverMods='movie__cover_height-507'
						cover={cover}
						title={'Film 1'}
					/>
					<Movie 
						movieMods={'movie_wigth-379'} 
						movieTitleMods='movie__title_font-size-24 movie__title_text-align-left'
						movieTagsMods='movie__tags_jc-left'
						movieCoverMods='movie__cover_height-507'
						cover={cover}
					/>
					<Movie 
						movieMods={'movie_wigth-379'} 
						movieTitleMods='movie__title_font-size-24 movie__title_text-align-left'
						movieTagsMods='movie__tags_jc-left'
						movieCoverMods='movie__cover_height-507'
						cover={cover}
					/>
					
				</div>

			</div>
		</section>
	);
}

export default ComingSoon;