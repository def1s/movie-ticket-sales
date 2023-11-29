import './comingSoon.scss';

import Preface from '../preface/Preface';
import Movie from '../movie/Movie';

import cover from '../../imgs/cover1.png';

const ComingSoon = () => {
	return (
		<section className="coming-soon coming-soon_mt-80">
			<div className="container">

				<Preface
					title={'Coming soon...'}
					descr={'Berita tentang dunia perfilman terbaru untuk anda!'}
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
					
					{/* <a className="movie movie_wigth-379">
						<img src="./img/cover1.png" alt="" className="movie__cover movie__cover_height-507"></img>
						<h2 className="movie__title movie__title_font-size-24 movie__title_text-align-left">
							Spider-Man: No Way Home
						</h2>
						<div className="movie__tags movie__tags_jc-left">
							<div className="movie__tag">XXL</div>
							<div className="movie__tag">3D</div>
							<div className="movie__tag">IMAX</div>
						</div>
					</a>

					<a className="movie movie_wigth-379">
						<img src="./img/cover2.png" alt="" className="movie__cover movie__cover_height-507"></img>
						<h2 className="movie__title movie__title_font-size-24 movie__title_text-align-left">
							Spider-Man: No Way Home
						</h2>
						<div className="movie__tags movie__tags_jc-left">
							<div className="movie__tag">XXL</div>
							<div className="movie__tag">3D</div>
							<div className="movie__tag">IMAX</div>
						</div>
					</a>

					<a className="movie movie_wigth-379">
						<img src="./img/cover1.png" alt="" className="movie__cover movie__cover_height-507"></img>
						<h2 className="movie__title movie__title_font-size-24 movie__title_text-align-left">
							Spider-Man: No Way Home
						</h2>
						<div className="movie__tags movie__tags_jc-left">
							<div className="movie__tag">XXL</div>
							<div className="movie__tag">3D</div>
							<div className="movie__tag">IMAX</div>
						</div>
					</a> */}
				</div>

			</div>
		</section>
	);
}

export default ComingSoon;