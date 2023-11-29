import {  Navigate, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import useCinemaServices from "../../services/CinemaServices";
import Spinner from "../spinner/Spinner";
import { setIsAuth } from "../../slices/auth";
import Cookies from "js-cookie";

const PrivateRoute = () => {
	const { jwtCheck, loading } = useCinemaServices();

	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.auth.isAuth);
	const token = Cookies.get('jwtToken');

	const checkAuth = (token) => {
		jwtCheck('/auth/check', token)
			.then(res => {
				if (!res.permission) {
					dispatch(setIsAuth(false));
				} else {
					dispatch(setIsAuth(true));
				}
			})
			.catch(error => console.log(error));
	}

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
  

// const PrivateRoute = () => {
// 	const { jwtCheck } = useCinemaServices();

// 	const token = useSelector(state => state.jwt.token);

// 	if (token) {
// 		jwtCheck('/auth/check', token)
// 			.then(result => {
// 				if (!result.permission) {
// 					return <Navigate to={'/login'}/>
// 				} else {
// 					return <Outlet/>
// 			}})
// 			.catch(error => console.log(error));
// 	} else {
// 		return <Navigate to={'/login'}/>
// 	}

// }

// export default PrivateRoute;