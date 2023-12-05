import './confirmPayment.scss';

import PaymentDetails from '../../components/paymentDetails/PaymentDetails';
import ConfirmOrder from '../../components/confirmOrder/ConfirmOrder';

const ConfirmPaymentPage = () => {
	return (
		<>
		
			<section className="confirm-payment">
				<div className="container">

					<div className="confirm-payment__header">Your order</div>
				
					<div className="confirm-payment__descr">
						Payment confirmation of your reserved seat
					</div>

					<div className="confirm-payment__wrapper">

						<PaymentDetails/>

						<ConfirmOrder/>

					</div>

				</div>
			</section>

		</>
	)
}

export default ConfirmPaymentPage;