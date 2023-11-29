import { useDispatch } from "react-redux";
import { setIsAuth } from "../slices/auth";
import useCinemaServices from "../services/CinemaServices";

const useAuthCheck = () => {
	const dispatch = useDispatch();
	const { jwtCheck } = useCinemaServices();

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
	};

	return { checkAuth };
};

export default useAuthCheck;