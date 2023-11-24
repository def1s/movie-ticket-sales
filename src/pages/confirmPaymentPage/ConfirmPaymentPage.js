import './confirm-payment.scss';

import Footer from "../../components/footer/Footer";
import PaymentDetails from '../../components/payment-details/Payment-details';
import ConfirmOrder from '../../components/confirm-order/Confirm-order';

const ConfirmPaymentPage = () => {
	return (
		<>
		
			<section class="confirm-payment">
				<div class="container">

					<div class="confirm-payment__header">Your order</div>
				
					<div class="confirm-payment__descr">
						Payment confirmation of your reserved seat
					</div>

					<div class="confirm-payment__wrapper">

						<PaymentDetails/>

						<ConfirmOrder/>

					</div>

				</div>
			</section>
			<Footer/>

		</>
	)
}

export default ConfirmPaymentPage;