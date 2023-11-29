import Auth from "../../components/auth/Auth";
import AuthButton from "../../components/authButton/AuthButton";
import AuthField from "../../components/authField/AuthField";
import useCinemaServices from "../../services/CinemaServices";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsAuth } from "../../slices/auth";
import { useState } from "react";
import Cookies from "js-cookie";

const LoginPage = () => {
	const [errorMessage, setErrorMessage] = useState('');
	const { login } = useCinemaServices();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onLogin = (e) => {
		e.preventDefault();
		setErrorMessage('');
		const data = {
			username: e.target.username.value,
			password: e.target.password.value
		}

		login('/auth/login', JSON.stringify(data))
			.then(res => {
				if (res.token) {
					Cookies.set('jwtToken', res.token, { expires: 1 });
					dispatch(setIsAuth(true));
					navigate('/login-success');
				}
			})
			.catch(error => {
				setErrorMessage(error.message);
				console.log(error);
			});
	};

	return (
		<>
			<Auth onSubmit={onLogin} title={'Login TIX ID'} errorMessage={errorMessage}>
				<AuthField mods={'auth-field_mt-64'} title={'USERNAME TIX ID'} placeholder={'Enter your username here'} inputType={'text'} inputName={'username'}/>
				<AuthField mods={'auth-field_mt-40'} title={'PASSWORD'} placeholder={'Enter password here'} inputType={'password'} inputName={'password'}/>
				<AuthButton mods={'auth-button_bg-blue auth-button_mt-66'} label={'LOGIN'}/>
				<AuthButton mods={'auth-button_bg-white auth-button_mt-46'} label={'REGISTRATION'} onClickFunc={() => navigate('/registration')}/>
			</Auth>
		</>
	)
}

export default LoginPage;