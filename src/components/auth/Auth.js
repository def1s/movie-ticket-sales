import './auth.scss';

const Auth = (props) => {
	return (
		<div className="auth">
			<div className="container">
				<div className="auth__wrapper">

					<div className="auth__back-button">Back</div>

					<div className="auth__form-wrapper">
					
						<form className="auth__form-content" onSubmit={(e) => props.onSubmit(e)}>

							<h2 className="auth__header">{props.title}</h2>
							<div className="auth__error">{props.errorMessage}</div>

							{
								props.children
							}

						</form>
					</div>
				
				</div>
			</div>
		</div>
	)
}

export default Auth;