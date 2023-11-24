import './confirm-order.scss';

import ProductTitle from '../product-title/Product-title';
import Divider from '../divider/Divider';
import OrderPosition from '../order-position/Order-position';

import { useSelector } from 'react-redux';

const ConfirmOrder = () => {
	const tickets = useSelector(state => state.tickets.selectedTickets);
	const ticketCost = useSelector(state => state.cost.currentSeatCost);

	const renderOrderPosition = (tickets, ticketCost) => { //брать из глобала?
		return tickets.map(ticket => {
			return <OrderPosition mods={'order-position_mt-12px'} title={`Seat ${ticket.name}`} cost={ticketCost}/>
		});
	};

	const calculateTotal = (tickets, ticketCost) => {
		return tickets.length * ticketCost;
	}

	return (
		<div class="confirm-order confirm-order_ml-80">
			<div class="confirm-order__header">Order summary</div>
			
			<ProductTitle mods={'product-title_mt-32px'}>Transaction details</ProductTitle> {/* насколько правильно работать через props.children? */}

			{renderOrderPosition(tickets, ticketCost)}

			<Divider mods={'divider_mt-32px'}/>

			<ProductTitle mods={'product-title_mt-32px'}>Promo & Discount</ProductTitle>

			{/* <OrderPosition mods={'order-position_mt-16px'}/>

			<OrderPosition mods={'order-position_mt-12px'}/> */}

			<Divider mods={'divider_mt-32px'}/>

			<OrderPosition mods={'order-position_mt-16px'} title={'Total'} cost={calculateTotal(tickets, ticketCost)}/>

			<Divider mods={'divider_mt-17'}/>

			<a href="" class="confirm-order__confirm-button">BUY TICKET</a> {/* поменять на кнопку? */}

		</div>
	);
}

export default ConfirmOrder;