import './order-position.scss';

const OrderPosition = ({ mods, cost, title }) => {
	return (
		<div class={`order-position ${mods}`}>
			<div class="order-position__title">{title}:</div>

			<div class="order-position__cost">{cost}$</div>

		</div>
	);
}

export default OrderPosition;