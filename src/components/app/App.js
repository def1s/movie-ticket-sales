import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainPage, ChoosingSeatPage, OrderMoviePage } from "../../pages";

import Header from '../header/Header';

const App = () => {
	return (
		<>

			<Router>

				<Header/>

				<Routes>
					<Route path={'/'} element={<MainPage/>}/>
					<Route path={'/choosing-seat'} element={<ChoosingSeatPage/>}/>
					<Route path={'/order-movie/:film_id'} element={<OrderMoviePage/>}/>
				</Routes>

			</Router>
		
		</>
	);
}

/* import Header from '../header/Header';
import MovieSelection from '../movie-selection/Movie-selection';
import Advertisement from '../advertisement/Advertisement';
import News from '../news/News';
import ComingSoon from '../coming-soon/Coming-soon';
import Footer from '../footer/Footer';

const App = () => {
	return (
		<>
		
			<Header/>

			<MovieSelection/>

			<Advertisement modificators={'advertisement_mt-90'}/>

			<News modificators={'news_mt-180'}/>

			<ComingSoon/>

			<Footer/>

		</>
	);
} */

export default App;