import './paymentSuccessfulPage.scss';
import clapper from '../../imgs/clapper.png';
import { Link } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const PaymentSuccessfulPage = () => {
    return (
        <>
            <div className='payment-successful'>
                <div className="payment-successful__header">The payment was successful!</div>
                <img src={clapper} alt="clapper" className="payment-successful__img"/>
                <div className="payment-successful__descr">Transaction details have been sent to your email, you can also check other ticket details in my ticket either on the website or your smartphone.</div>
                <Link className="payment-successful__my-tickets-button" to={'/my-tickets'}>My tickets</Link>
            </div>

            <Footer/>
        </>
    );
};

export default PaymentSuccessfulPage;