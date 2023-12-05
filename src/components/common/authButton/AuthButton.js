import './authButton.scss';

const AuthButton = ({mods, label, onClickFunc}) => {
	return (
		<button className={`auth-button ${mods}`} onClick={onClickFunc}>{label}</button>
	)
}

export default AuthButton;