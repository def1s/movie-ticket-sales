import { useState, useEffect } from "react";

import './slider.scss';

import arrowToLeft from '../../imgs/arrow-left.png';
import arrowToRight from '../../imgs/arrow-right.png';


const Slider = (props) => {
	const {marginRight, itemWidht, slides, numOfVisibleSlides} = props;

	const [position, setPosition] = useState(0);
	const [innerWidth, setInnerWidth] = useState(slides.length * itemWidht + (slides.length - 1) * marginRight);
	const [windowWidth, setWindowWidth] = useState(numOfVisibleSlides * itemWidht + (numOfVisibleSlides - 1) * marginRight);

	const changeSlide = (i) => { //переменная i определяет знак в вычислении позиции
		if ((position + i) * (itemWidht + marginRight) < 0) {
			setPosition(slides.length - 1);
			return;
		}

		if ((position + i) * (itemWidht + marginRight) >= innerWidth) {
			setPosition(0);
			return;
		}

		setPosition(position => position + i);
	};

	useEffect(() => {
		setInnerWidth(slides.length * itemWidht + (slides.length - 1) * marginRight);
	}, [slides, marginRight, itemWidht]);


	const windowSliderStyles = {
		'width': windowWidth,
	};

	const innerSliderStyles = {
		'width': innerWidth + 'px',
		'transform': `translateX(${position * -(itemWidht + marginRight)}px)`
	};

	// пофиксить баг с тем, что при 2 и более элементах прокручивается вперед больше, чем надо

	return (
		<div className="slider">

			<div className="arrow" onClick={() => changeSlide(-1)}>
				<img class="arrow" src={arrowToLeft} alt='arrow to left' ></img>
			</div>

			<div className="slider__wrapper" style={windowSliderStyles}>				

					<div className="slider__inner" style={innerSliderStyles}>

						{
							slides
						}

					</div>

			</div>

			<div className="arrow" onClick={() => changeSlide(1)}>
				<img class="arrow" src={arrowToRight} alt='arrow to right'></img>
			</div>

		</div>
	);
}

export default Slider;