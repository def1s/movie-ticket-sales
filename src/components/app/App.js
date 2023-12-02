import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { MainPage, ChoosingSeatPage, OrderMoviePage, ConfirmPaymentPage, LoginPage, RegistrationPage, TransactionsPage } from "../../pages";

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

					<Route path={'/order-movie/:film_id'}>

						<Route index element={<OrderMoviePage/>}/>
						<Route path={'choosing-seat'} element={<ChoosingSeatPage/>}/>

						<Route path={'confirm-payment'} element={<PrivateRoute/>}>
							<Route path={''} element={<ConfirmPaymentPage/>}/>
						</Route>

					</Route>

					{/* <Route path={'/my-tickets'} element={<TransactionsPage/>}/> */}

					<Route path={'/my-tickets'} element={<PrivateRoute/>}>
						<Route index element={<TransactionsPage/>}/>
					</Route>

					<Route path={'/registration'} element={<RegistrationPage/>}/>

					<Route path={'/login'} element={<LoginPage/>}/>
					<Route path={'/login-success'} element={<LoginSuccess/>}/>

					<Route path={'*'} element={'404'}/>
				</Routes>

			</Router>
		
		</>
	);
}

export default App;