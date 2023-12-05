import './app.scss';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import {
	MainPage,
	ChoosingSeatPage,
	OrderMoviePage,
	ConfirmPaymentPage,
	LoginPage,
	RegistrationPage,
	TransactionsPage,
	PaymentSuccessfulPage
} from "../../pages";

import Header from '../header/Header';
import Footer from '../footer/Footer';
import PrivateRoute from "../privateRoute/PrivateRoute";

const App = () => {

	return (
		<div className="app">

			<Router> 

				<Header/>

				<Routes>
					<Route path={'/'} element={<MainPage/>}/>

					<Route path={'/order-movie/:film_id'}>

						<Route index element={<OrderMoviePage/>}/>
						<Route path={'choosing-seat'} element={<ChoosingSeatPage/>}/>

						<Route path={'confirm-payment'} element={<PrivateRoute/>}>
							<Route path={''} element={<ConfirmPaymentPage/>}/>
						</Route>

					</Route>

					<Route path={'/my-tickets'} element={<PrivateRoute/>}>
						<Route index element={<TransactionsPage/>}/>
					</Route>

					<Route path={'/payment-successful'} element={<PaymentSuccessfulPage/>}/>

					<Route path={'/registration'} element={<RegistrationPage/>}/>

					<Route path={'/login'} element={<LoginPage/>}/>

					<Route path={'*'} element={'404'}/>
				</Routes>

			</Router>

			<Footer/>
		
		</div>
	);
}

export default App;