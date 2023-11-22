import './cinema-hall.scss';

import useCinemaServices from '../../services/CinemaServices';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { timeSelecting } from '../../slices/times';

const CinemaHall = ({ hall, hall_id }) => {
	const {getHall, loading, error} = useCinemaServices();
	const [hallInfo, setHallInfo] = useState([{}]);

	const dispatch = useDispatch();
	const selectedTime = useSelector(state => new Date(state.times.selectedTime));

	useEffect(() => {
		getHall(`/halls/${hall_id}`)
			.then(res => setHallInfo(res));
	}, [hall_id]);

	const times = hall.map((item, index) => {
		let hours = item.start_time.getHours();
		let minutes = item.start_time.getMinutes();
		let styles = '';

		if (hours < 10) { //мб в функцию вынести, но мало кода, не знаю
			hours = '0' + hours;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}

		if (+item.start_time.getTime() === +selectedTime.getTime()) {
			styles = 'cinema-hall__time_current';
		}

		return <div class={`cinema-hall__time ${styles}`} key={index} onClick={() => dispatch(timeSelecting(item.start_time))}>{hours}:{minutes}</div>;
	});

	const content = !loading && !error ? <View times={times} hallInfo={hallInfo} hall_id={hall_id}/> : null;
	const isLoading = loading && !error ? <TestLoading/> : null; //заменить на нормальный компонент

	console.log('RENDER CINEMA HALL');

	return (
		<>
			{content}
			{isLoading}
		</>
	);
}

const View = React.memo(({ times, hallInfo }) => {
	console.log('RENDER CINEMA HALL VIEW');
	return (
		<div class="cinema-hall" >

			<div class="cinema-hall__info">
				<div class="cinema-hall__name">{hallInfo[0].name}</div>
				<div class="cinema-hall__cost">10$</div>
			</div>

			<div class="cinema-hall__times">
				{
					times
				}
			</div>

		</div>
	)
});

const TestLoading = () => { //заменить на нормальный компонент
	return (
		<h2>Is loading</h2>
	);
}

export default CinemaHall;