import './movie.scss';

const Movie = ({cover, title, movieMods='', movieTitleMods='', movieTagsMods='', movieCoverMods=''}) => { //попыка в БЭМ
	const imageUrl = `data:image/jpeg;base64,${cover}`;

	return (
		<div class={`movie ${movieMods}`}>
			<img src={imageUrl} alt="" class={`movie__cover ${movieCoverMods}`}></img>
			<h2 class={`movie__title ${movieTitleMods}`}>{title}</h2>
			<div class={`movie__tags + ${movieTagsMods}`}>
				<div class="movie__tag">XXL</div>
				<div class="movie__tag">3D</div>
				<div class="movie__tag">IMAX</div>
			</div>
		</div>
	);
}

export default Movie;