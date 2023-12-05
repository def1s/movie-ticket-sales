import './chooise.scss';

import FilmDetails from "../../components/filmsComponents/filmDetails/FilmDetails";
import FilmPreview from "../../components/filmsComponents/filmPreview/FilmPreview";

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
	);
}

export default OrderMoviePage;