import './chooise.scss';

import FilmDetails from "../components/film-details/Film-details";
import FilmPreview from "../components/film-preview/Film-preview";

import React, { useCallback, useState } from 'react';

const MemoizedFilmDetails = React.memo(FilmDetails);

const OrderMoviePage = () => {
	const [selectedTime, setSelectedTime] = useState(new Date()); //вынести в контекст или использовать redux?
	const [selectedDate, setSelectedDate] = useState(new Date());

	const onSelectTime = useCallback((time) => {
		setSelectedTime(time);
		// console.log(time);
	}, []);

	const getSelectedDate = useCallback((date) => { //поменять название функции
		setSelectedDate(date);
		// console.log(date);
	}, []);

	console.log('RENDER ORDER MOVIE PAGe');

	return (

		<div className="chooise">
			<div className="container">
				<div className="chooise__wrapper">

					<MemoizedFilmDetails 
						onSelectTime={onSelectTime}
						getSelectedDate={getSelectedDate}
						selectedDate={selectedDate}
						selectedTime={selectedTime}
					/>
			
					<FilmPreview/>

				</div>
			</div>
		</div>
	);
}

export default OrderMoviePage;