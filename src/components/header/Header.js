import './header.scss';

import logo from '../../imgs/logo.png';
import defaultAvatar from '../../imgs/default_avatar.svg';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import useAuthCheck from '../../hooks/useAuthCheck';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { setIsAuth } from '../../slices/auth';
import { useDispatch } from 'react-redux';

const Header = () => {
	const { checkAuth } = useAuthCheck();
	const dispatch = useDispatch();
	const isAuth = useSelector(state => state.auth.isAuth);
	const token = Cookies.get('jwtToken');

	const navigate = useNavigate();

	useEffect(() => {
		checkAuth(token);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [token]);

	const onLogOut = () => {
		Cookies.remove('jwtToken');
		dispatch(setIsAuth(false));
	};

	const renderUserProfile = () => {
		if (isAuth) {
			return (
				<>
					<div className="header__avatar">
						<img src={defaultAvatar} alt="avatar"></img>
					</div>
					<button className="header__sign-button" onClick={onLogOut}>Log out</button>	
				</>
			)
		} else {
			return <button className="header__sign-button" onClick={() => navigate('/login')}>Log in</button>
		}
	};

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

						<Link to={'/'} className="header__label">Home</Link>
						<Link to={'/my-tickets'} className="header__label">My tickets</Link>
						<Link to={'/'} className="header__label">Cinema news</Link>

						{
							renderUserProfile()
						}

					</div>

				</div>

			</div>
		</header>
	);
}

export default Header;