import './chooise.scss';

import FilmDetails from "../components/film-details/Film-details";
import FilmPreview from "../components/film-preview/Film-preview";

const OrderMoviePage = () => {
	return (

		<div className="chooise">
			<div className="container">
				<div className="chooise__wrapper">

					<FilmDetails/>

					<FilmPreview/>

				</div>
			</div>
		</div>
		// <>

		// 	<FilmDetails/>

		// </>
	);
}

export default OrderMoviePage;