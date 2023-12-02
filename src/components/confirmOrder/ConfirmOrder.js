import './confirmOrder.scss';

import ProductTitle from '../productTitle/ProductTitle';
import Divider from '../divider/Divider';
import OrderPosition from '../orderPosition/OrderPosition';
import useCinemaServices from '../../services/CinemaServices';

import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';

const ConfirmOrder = () => {
	const { jwtAuthenticatedPostRequest } = useCinemaServices();

	const tickets = useSelector(state => state.tickets.selectedTickets);
	const ticketCost = useSelector(state => state.cost.currentSeatCost);
	const session_id = useSelector(state => state.sessions.currentSessionId);
	const token = Cookies.get('jwtToken');

	const renderOrderPosition = (tickets, ticketCost) => { //брать из глобала?
		return tickets.map((ticket, index) => {
			return <OrderPosition key={index} mods={'order-position_mt-12px'} title={`Seat ${ticket.name}`} cost={ticketCost}/>
		});
	};

	const calculateTotal = (tickets, ticketCost) => {
		return tickets.length * ticketCost;
	};

	const onBuying = async (e) => {
		e.preventDefault();
		const data = {
			seats: tickets,
			session_id: session_id
		};
	
		jwtAuthenticatedPostRequest('/api/tickets/add', JSON.stringify(data), token)
			.then(res => console.log(res))
			.catch(error => console.log(error));
	};

	return (
		<div className="confirm-order confirm-order_ml-80">
			<div className="confirm-order__header">Order summary</div>
			
			<ProductTitle mods={'product-title_mt-32px'}>Transaction details</ProductTitle> {/* насколько правильно работать через props.children? */}

			{renderOrderPosition(tickets, ticketCost)}

			<Divider mods={'divider_mt-32px'}/>

			<ProductTitle mods={'product-title_mt-32px'}>Promo & Discount</ProductTitle>

			{/* <OrderPosition mods={'order-position_mt-16px'}/>

			<OrderPosition mods={'order-position_mt-12px'}/> */}

			<Divider mods={'divider_mt-32px'}/>

			<OrderPosition mods={'order-position_mt-16px'} title={'Total'} cost={calculateTotal(tickets, ticketCost)}/>

			<Divider mods={'divider_mt-17'}/>

			<a href="" className="confirm-order__confirm-button" onClick={(e) => onBuying(e)}>BUY TICKETS</a> {/* поменять на кнопку? */}

		</div>
	);
}

export default ConfirmOrder;