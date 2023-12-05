import {  Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useCinemaServices from "../../services/CinemaServices";
import Spinner from "../common/spinner/Spinner";
import Cookies from "js-cookie";
import useAuthCheck from "../../hooks/useAuthCheck";

const PrivateRoute = () => {
	// const { loading } = useCinemaServices();
	const { checkAuth } = useAuthCheck();
	
	const location = useLocation();

	const isAuth = useSelector(state => state.auth.isAuth);
	const token = Cookies.get('jwtToken');

	//сохраняем путь, по которому хочет перейти пользователь только если он не авторизирован
	if (!isAuth) {
		localStorage.setItem('previousPath', location.pathname);
	}

	useEffect(() => {
		checkAuth(token);
	}, [token]);

	// if (loading) {
	// 	return <Spinner/>
	// }

	if (isAuth) {
		return <Outlet/>
	} else {
		return <Navigate to={'/login'}/>
	}
}
  
export default PrivateRoute;