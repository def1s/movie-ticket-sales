import './confirmOrder.scss';

import ProductTitle from '../productTitle/ProductTitle';
import Divider from '../common/divider/Divider';
import OrderPosition from '../orderComponents/orderPosition/OrderPosition';
import useCinemaServices from '../../services/CinemaServices';

import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Spinner from "../common/spinner/Spinner";

const ConfirmOrder = () => {
	const { jwtAuthenticatedPostRequest, loading  } = useCinemaServices();
	const navigate = useNavigate();

	const tickets = useSelector(state => state.tickets.selectedTickets);
	const ticketCost = useSelector(state => state.cost.currentSeatCost);
	const session_id = useSelector(state => state.sessions.currentSessionId);
	const token = Cookies.get('jwtToken');

	const renderOrderPosition = () => {
		return tickets.map((ticket, index) => {
			return <OrderPosition key={index} mods={'order-position_mt-12px'} title={`Seat ${ticket.name}`} cost={ticketCost}/>
		});
	};

	const calculateTotal = () => {
		return tickets.length * ticketCost;
	};

	const onBuying = async (e) => {
		e.preventDefault();
		const data = {
			seats: tickets,
			session_id: session_id
		};
	
		jwtAuthenticatedPostRequest('/api/tickets/add', JSON.stringify(data), token)
			.then(res => {
				navigate('/payment-successful');
			})
			.catch(error => console.log(error));
	};

	return (
		<div className="confirm-order confirm-order_ml-80">
			<div className="confirm-order__header">Order summary</div>
			
			<ProductTitle mods={'product-title_mt-32px'}>Transaction details</ProductTitle> {/* насколько правильно работать через props.children? */}

			{ renderOrderPosition() }
			<Divider mods={'divider_mt-32px'}/>

			<ProductTitle mods={'product-title_mt-32px'}>Promo & Discount</ProductTitle>
			<Divider mods={'divider_mt-32px'}/>

			<OrderPosition mods={'order-position_mt-16px'} title={'Total'} cost={ calculateTotal() }/>
			<Divider mods={'divider_mt-17'}/>

			<button className="confirm-order__confirm-button" onClick={(e) => onBuying(e)}>BUY TICKETS</button> {/* поменять на кнопку? */}

			{ loading ? <Spinner/> : null }
		</div>
	);
}

export default ConfirmOrder;