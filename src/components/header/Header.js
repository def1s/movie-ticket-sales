import './header.scss';

import logo from '../../imgs/logo.png';

import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header class="header">
			<div class="container">

				<div class="header__content">

					<Link to={'/'}>
						<div class="logo">
							<img src={logo} alt="logo"></img>
						</div>
					</Link>

					<div class="header__nav">

						<div class="header__label">Home</div>
						<div class="header__label">My tickets</div>
						<div class="header__label">Cinema news</div>

						<div class="header__notification">
							nt
						</div>

						<div class="header__avatar">
							<img src="" alt="avatar"></img>
						</div>

					</div>

				</div>

			</div>
		</header>
	);
}

export default Header;