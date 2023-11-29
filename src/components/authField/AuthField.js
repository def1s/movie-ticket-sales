import './authField.scss';

const AuthField = ({title, placeholder, mods, inputType, inputName}) => {
	return (
		<div className={`auth-field ${mods}`}>
			<div className="auth-field__title">{title}</div>
			<input type={inputType} name={inputName} className="auth-field__input" placeholder={placeholder}></input>
		</div>
	)
}

export default AuthField;