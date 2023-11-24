import './order-cost.scss';

const OrderCost = ({ cost }) => {
	return (
		<div class="order-cost">
			<div class="order-cost__number">{cost}$</div>
			{/* <div class="order-cost__multiplier">X3</div> */}
		</div>
	);
}

export default OrderCost;