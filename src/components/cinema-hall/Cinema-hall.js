import './cinema-hall.scss';

import useCinemaServices from '../../services/CinemaServices';
import { useEffect, useState } from 'react';

const CinemaHall = ({ hall, hall_id }) => {
	const {getHall, loading, error} = useCinemaServices();
	const [hallInfo, setHallInfo] = useState([{}]);

	useEffect(() => {
		getHall(`/halls/${hall_id}`)
			.then(res => setHallInfo(res));
	}, [hall]);

	const times = hall.map(item => {
		let hours = item.start_time.getHours();
		let minutes = item.start_time.getMinutes();

		if (hours < 10) { //мб в функцию вынести, но мало кода, не знаю
			hours = '0' + hours;
		}

		if (minutes < 10) {
			minutes = '0' + minutes;
		}
		return <div class="cinema-hall__time">{hours}:{minutes}</div>;
	});

	const content = !loading && !error ? <View times={times} hallInfo={hallInfo} hall_id={hall_id}/> : null;
	const isLoading = loading && !error ? <TestLoading/> : null; //заменить на нормальный компонент

	return (
		<>
			{content}
			{isLoading}
		</>
	);
}

const View = ({ times, hallInfo }) => {
	console.log(hallInfo);
	return (
		<div class="cinema-hall">

			<div class="cinema-hall__info">
				<div class="cinema-hall__name">{hallInfo[0].name}</div>
				<div class="cinema-hall__cost">10$</div>
			</div>

			<div class="cinema-hall__times">
				{
					times
				}
				{/* <div class="cinema-hall__time cinema-hall__time_occupied">11:00</div>
				<div class="cinema-hall__time cinema-hall__time_occupied">11:00</div>
				<div class="cinema-hall__time cinema-hall__time_current">11:00</div>
				<div class="cinema-hall__time">11:00</div>
				<div class="cinema-hall__time">11:00</div>
				<div class="cinema-hall__time">11:00</div>
				<div class="cinema-hall__time">11:00</div> */}
			</div>

		</div>
	)
}

const TestLoading = () => { //заменить на нормальный компонент
	return (
		<h2>Is loading</h2>
	);
}

export default CinemaHall;