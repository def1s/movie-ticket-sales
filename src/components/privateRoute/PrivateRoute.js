import {  Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import useCinemaServices from "../../services/CinemaServices";
import Spinner from "../spinner/Spinner";
import Cookies from "js-cookie";
import useAuthCheck from "../../hooks/useAuthCheck";

const PrivateRoute = () => {
	const { loading } = useCinemaServices();
	const { checkAuth } = useAuthCheck();

	const isAuth = useSelector(state => state.auth.isAuth);
	const token = Cookies.get('jwtToken');

	useEffect(() => {
		checkAuth(token);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token]);

	if (loading) {
		return <Spinner/>
	}

	if (isAuth) {
		return <Outlet/>
	} else {
		return <Navigate to={'/login'}/>
	}
}
  
export default PrivateRoute;