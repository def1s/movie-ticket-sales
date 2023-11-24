import './spinner.scss';
import spinner from '../../imgs/spinner.gif';

const Spinner = () => {
	return (
		<div className="spinner">
			<img src={spinner} alt="spinner"/>
		</div>
	)
}

export default Spinner;