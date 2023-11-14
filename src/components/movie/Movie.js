import './movie.scss';

const Movie = ({cover, title, movieMods='', movieTitleMods='', movieTagsMods='', movieCoverMods=''}) => {
	// let addStyles = '';

	// for (let modificator of modificators) {
	// 	addStyles += modificator + ' ';
	// }

	return (
		<a class={`movie ${movieMods}`} href="./pages/movie.html">
			<img src={cover} alt="" class={`movie__cover ${movieCoverMods}`}></img>
			<h2 class={`movie__title ${movieTitleMods}`}>{title}</h2>
			<div class={`movie__tags + ${movieTagsMods}`}>
				<div class="movie__tag">XXL</div>
				<div class="movie__tag">3D</div>
				<div class="movie__tag">IMAX</div>
			</div>
		</a>
	);
}

export default Movie;