import './transactionsPage.scss';

import MyTickets from "../../components/myTickets/MyTickets";
import MyTicketsNavigation from "../../components/myTicketsNavigation/MyTicketsNavigation";

const TransactionsPage = () => {
	return (
		<section className="transactions">

			<MyTicketsNavigation/>
			<MyTickets/>

		</section>
	);
}

export default TransactionsPage;