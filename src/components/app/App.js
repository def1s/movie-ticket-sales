import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainPage, ChoosingSeatPage, OrderMoviePage, ConfirmPaymentPage, LoginPage } from "../../pages";

import Header from '../header/Header';
import PrivateRoute from "../privateRoute/PrivateRoute";
import LoginSuccess from "../loginSuccess/LoginSuccess";

const App = () => {

	return (
		<>

			<Router> 

			<Header/>

				<Routes>
					<Route path={'/'} element={<MainPage/>}/>

					<Route path={'/order-movie/:film_id'} element={<PrivateRoute/>}>

						<Route path={''} element={<OrderMoviePage/>}/>
						<Route path={'choosing-seat'} element={<ChoosingSeatPage/>}/>
						<Route path={'confirm-payment'} element={<ConfirmPaymentPage/>}/>

					</Route>

					<Route path={'/login-success'} element={<LoginSuccess/>}/>


					<Route path={'/login'} element={<LoginPage/>}/>
					<Route path={'*'} element={'404'}/>
				</Routes>

			</Router>
		
		</>
	);
}

export default App;