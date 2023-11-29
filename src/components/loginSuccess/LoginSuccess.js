import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const LoginSuccess = () => {
	// const navigate = useNavigate();
	// const isAuth = useSelector(state => state.jwt.isAuth);

	// if (isAuth) {
	// 	return navigate('/');
	// }

	return (
		<h2>Login is successfull</h2>
	);
}

export default LoginSuccess;