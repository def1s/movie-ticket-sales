import { useState, useEffect } from "react";

import './slider.scss';

import arrowToLeft from '../../imgs/arrow-left.png';
import arrowToRight from '../../imgs/arrow-right.png';


const Slider = (props) => {
	const {marginRight, itemWidht, slides, numOfVisibleSlides} = props;

	//текущий сдвиг по позиции
	const [position, setPosition] = useState(0);
	//ширина внутреннего окна, в котором помещаются все элементы слайдера
	const [innerWidth, setInnerWidth] = useState(slides.length * itemWidht + (slides.length - 1) * marginRight);
	//ширина внешнего окна, через которое слайдеры видны
	const [windowWidth, setWindowWidth] = useState(numOfVisibleSlides * itemWidht + (numOfVisibleSlides - 1) * marginRight);

	const changeSlide = (i) => { //переменная i определяет знак в вычислении позиции
		//если слева элементов нет - пока что ничего не происходит
		if ((position + i) * (itemWidht + marginRight) < 0) {
			// setPosition(slides.length - numOfVisibleSlides);
			return;
		}

		//если следующего элемента нет - перекидываем на первый
		if ((position + i) * (itemWidht + marginRight) > innerWidth - windowWidth) {
			setPosition(0);
			return;
		}

		setPosition(position => position + i); //в противном случае меняем позицию
	};

	useEffect(() => { //пересчет внутреннего окна
		setInnerWidth(slides.length * itemWidht + (slides.length - 1) * marginRight);
	}, [slides, marginRight, itemWidht]);


	const windowSliderStyles = { //стили для внешнего окна
		'width': windowWidth,
	};

	const innerSliderStyles = { //стили внутреннего окна
		'width': innerWidth + 'px',
		'transform': `translateX(${position * -(itemWidht + marginRight)}px)`
	};

	return (
		<div className="slider">

			<div className="arrow" onClick={() => changeSlide(-1)}>
				<img className="arrow" src={arrowToLeft} alt='arrow to left' ></img>
			</div>

			<div className="slider__wrapper" style={windowSliderStyles}>				

					<div className="slider__inner" style={innerSliderStyles}>

						{ slides }

					</div>

			</div>

			<div className="arrow" onClick={() => changeSlide(1)}>
				<img className="arrow" src={arrowToRight} alt='arrow to right'></img>
			</div>

		</div>
	);
}

export default Slider;