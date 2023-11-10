import './order.scss';

const Order = () => {
	return (
		<div class="order">
			<div class="order__cinema-name">GRAND LONDON CINEMA</div>

			<div class="order__date">15 December 2023</div>

			<div class="order__session-info">
				<div class="order__hall-name">REGULAR 2D</div>
				<div class="order__time">11:00</div>
			</div>

			<a class="order__confirm-button" href="./chooise.html">CONFIRM</a> 
		</div>
	);
}

export default Order;