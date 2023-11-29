import './authButton.scss';

const AuthButton = ({mods, label}) => {
	return (
		<button className={`auth-button ${mods}`}>{label}</button>
	)
}

export default AuthButton;