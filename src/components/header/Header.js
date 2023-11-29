import './header.scss';

import logo from '../../imgs/logo.png';
import ex from '../../imgs/cover1.png'

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
	const isAuth = useSelector(state => state.auth.isAuth);

	return (
		<header className="header">
			<div className="container">

				<div className="header__content">

					<Link to={'/'}>
						<div className="logo">
							<img src={logo} alt="logo"></img>
						</div>
					</Link>

					<div className="header__nav">

						<div className="header__label">Home</div>
						<div className="header__label">My tickets</div>
						<div className="header__label">Cinema news</div>

						{/* <div className="header__notification">
							nt
						</div> */}

						{
							isAuth ?
							<div className="header__avatar">
								<img src={ex} alt="avatar"></img>
							</div> :
							<button className="header__sign-button">Log in</button>
						}

					</div>

				</div>

			</div>
		</header>
	);
}

export default Header;