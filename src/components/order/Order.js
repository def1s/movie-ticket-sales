import './order.scss';

import { Link } from 'react-router-dom';

const Order = () => {
	return (
		<div class="order">
			<div class="order__cinema-name">GRAND LONDON CINEMA</div>

			<div class="order__date">15 December 2023</div>

			<div class="order__session-info">
				<div class="order__hall-name">REGULAR 2D</div>
				<div class="order__time">11:00</div>
			</div>

			<Link to={'/choosing-seat'}><button class="order__confirm-button">CONFIRM</button></Link>
		</div>
	);
}

export default Order;