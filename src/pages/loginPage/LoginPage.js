import Auth from "../../components/auth/Auth";
import AuthButton from "../../components/authButton/AuthButton";
import AuthField from "../../components/authField/AuthField";
import useCinemaServices from "../../services/CinemaServices";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setJwt, setIsAuth } from "../../slices/auth";
import Cookies from "js-cookie";

const LoginPage = () => {
	const { login } = useCinemaServices();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogin = (e) => {
		e.preventDefault();
		const data = {
			username: e.target.username.value,
			password: e.target.password.value
		}

		login('/auth/login', JSON.stringify(data))
			.then(res => {
				if (res.token) {
					// dispatch(setJwt(res.token));
					Cookies.set('jwtToken', res.token, { expires: 1 });
					dispatch(setIsAuth(true));
					navigate('/login-success');
				}
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<>
			<Auth onSubmit={onLogin}>
				<AuthField mods={'auth-field_mt-64'} title={'USERNAME TIX ID'} placeholder={'Enter your username here'} inputType={'text'} inputName={'username'}/>
				<AuthField mods={'auth-field_mt-40'} title={'PASSWORD'} placeholder={'Enter password here'} inputType={'password'} inputName={'password'}/>
				<AuthButton mods={'auth-button_bg-blue auth-button_mt-66'} label={'LOGIN'}/>
				<AuthButton mods={'auth-button_bg-white auth-button_mt-46'} label={'REGISTRATION'}/>
			</Auth>
		</>
	)
}

export default LoginPage;