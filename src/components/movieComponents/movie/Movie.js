import './movie.scss';

const Movie = ({cover, title, movieMods='', movieTitleMods='', movieTagsMods='', movieCoverMods=''}) => { //попыка в БЭМ

	return (
		<div className={`movie ${movieMods}`}>
			<img src={cover} alt="" className={`movie__cover ${movieCoverMods}`}></img>
			<h2 className={`movie__title ${movieTitleMods}`}>{title}</h2>
			<div className={`movie__tags + ${movieTagsMods}`}>
				<div className="movie__tag">XXL</div>
				<div className="movie__tag">3D</div>
				<div className="movie__tag">IMAX</div>
			</div>
		</div>
	);
}

export default Movie;