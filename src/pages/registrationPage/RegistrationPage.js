import Auth from "../../components/auth/Auth";
import AuthField from "../../components/authField/AuthField";
import AuthButton from "../../components/authButton/AuthButton";

import useCinemaServices from "../../services/CinemaServices";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegistrationPage = () => {
	const navigate = useNavigate();
	const { login, error } = useCinemaServices();
	const [errorMessage, setErrorMessage] = useState('');

	const onRegistration = (e) => {
		e.preventDefault();
		setErrorMessage('');
		const data = {
			username: e.target.username.value,
			password: e.target.password.value
		}

		login('/auth/registration', JSON.stringify(data))
			.then(res => navigate('/'))
			.catch(error => {
				setErrorMessage(error.message);
			});
	};

	return (
		<Auth onSubmit={onRegistration} title={'Registration TIX ID'} errorMessage={errorMessage}>
			<AuthField mods={'auth-field_mt-64'} title={'USERNAME'} placeholder={'Enter your username here'} inputType={'text'} inputName={'username'}/>
			<AuthField mods={'auth-field_mt-40'} title={'PASSWORD'} placeholder={'Enter password here'} inputType={'password'} inputName={'password'}/>
			<AuthButton mods={'auth-button_bg-blue auth-button_mt-66'} label={'REGISTRATION'}/>
		</Auth>
	);
}

export default RegistrationPage;