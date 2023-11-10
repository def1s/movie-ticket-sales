import './coming-soon.scss';

import Preface from '../preface/Preface';
import Movie from '../movie/Movie';

import cover from '../../imgs/cover1.png';

const ComingSoon = () => {
	return (
		<section class="coming-soon coming-soon_mt-80">
			<div class="container">

				<Preface
					title={'Coming soon...'}
					descr={'Berita tentang dunia perfilman terbaru untuk anda!'}
					link={null}
				/>

				<div class="coming-soon__movies">

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
					<Movie 
						movieMods={'movie_wigth-379'} 
						movieTitleMods='movie__title_font-size-24 movie__title_text-align-left'
						movieTagsMods='movie__tags_jc-left'
						movieCoverMods='movie__cover_height-507'
						cover={cover}
					/>
					
					{/* <a class="movie movie_wigth-379">
						<img src="./img/cover1.png" alt="" class="movie__cover movie__cover_height-507"></img>
						<h2 class="movie__title movie__title_font-size-24 movie__title_text-align-left">
							Spider-Man: No Way Home
						</h2>
						<div class="movie__tags movie__tags_jc-left">
							<div class="movie__tag">XXL</div>
							<div class="movie__tag">3D</div>
							<div class="movie__tag">IMAX</div>
						</div>
					</a>

					<a class="movie movie_wigth-379">
						<img src="./img/cover2.png" alt="" class="movie__cover movie__cover_height-507"></img>
						<h2 class="movie__title movie__title_font-size-24 movie__title_text-align-left">
							Spider-Man: No Way Home
						</h2>
						<div class="movie__tags movie__tags_jc-left">
							<div class="movie__tag">XXL</div>
							<div class="movie__tag">3D</div>
							<div class="movie__tag">IMAX</div>
						</div>
					</a>

					<a class="movie movie_wigth-379">
						<img src="./img/cover1.png" alt="" class="movie__cover movie__cover_height-507"></img>
						<h2 class="movie__title movie__title_font-size-24 movie__title_text-align-left">
							Spider-Man: No Way Home
						</h2>
						<div class="movie__tags movie__tags_jc-left">
							<div class="movie__tag">XXL</div>
							<div class="movie__tag">3D</div>
							<div class="movie__tag">IMAX</div>
						</div>
					</a> */}
				</div>

			</div>
		</section>
	);
}

export default ComingSoon;