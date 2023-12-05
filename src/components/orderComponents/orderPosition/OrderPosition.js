import './orderPosition.scss';

const OrderPosition = ({ mods, cost, title }) => {
	return (
		<div className={`order-position ${mods}`}>
			<div className="order-position__title">{title}:</div>

			<div className="order-position__cost">{cost}$</div>

		</div>
	);
}

export default OrderPosition;