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
					<Route path={'/order-movie/:film_id/choosing-seat'} element={<ChoosingSeatPage/>}/>
					<Route path={'/order-movie/:film_id'} element={<OrderMoviePage/>}/>
					<Route path={'*'} element={'404'}/>
				</Routes>

			</Router>
		
		</>
	);
}

export default App;