import './date-selection.scss';

import arrowToLeft from '../../imgs/arrow-left.png';
import arrowToRight from '../../imgs/arrow-right.png';

const DateSelection = () => {
	return (
		<div class="date-selection">
			<img src={arrowToLeft} alt="" class="arrow"></img>
			
			<div class="date-selection__inner">

				<div class="date-selection__date date-selection__date_current">
					<div class="date-selection__number">15 dec</div>
					<div class="date-selection__weekday date-selection__weekday_current">SUN</div>
				</div>
				<div class="date-selection__date">
					<div class="date-selection__number">17 dec</div>
					<div class="date-selection__weekday">THS</div>
				</div>
				<div class="date-selection__date">
					<div class="date-selection__number">18 dec</div>
					<div class="date-selection__weekday">WND</div>
				</div>
				<div class="date-selection__date">
					<div class="date-selection__number">19 dec</div>
					<div class="date-selection__weekday">SDF</div>
				</div>
				<div class="date-selection__date">
					<div class="date-selection__number">12 dff</div>
					<div class="date-selection__weekday">РАЛ</div>
				</div>

			</div>

			<img src={arrowToRight} alt="" class="arrow"></img>
		</div>
	);
}

export default DateSelection;