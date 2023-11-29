import './cinemaHall.scss';

import useCinemaServices from '../../services/CinemaServices';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { timeSelecting } from '../../slices/times';
import { sessionIdSelected } from '../../slices/sessions';
import { hallSelected } from '../../slices/halls';
import { setSeatCost } from '../../slices/cost';

import Spinner from '../spinner/Spinner';

const CinemaHall = ({ hall, hall_id }) => { //изменить имя переменной hall
	const {getHall, loading, error} = useCinemaServices();

	const dispatch = useDispatch();
	const selectedTime = useSelector(state => new Date(state.times.selectedTime));

	const [hallInfo, setHallInfo] = useState([{}]); //оптимизировать, каждый раз при новом выборе даты инфа грузится с сервера

	useEffect(() => {
		getHall(`/api/halls/${hall_id}`)
			.then(result => setHallInfo(result.data))
			.catch(err => console.log(err));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hall_id]);

	const onSelectingTime = (item, hallInfo) => {
		dispatch(timeSelecting(item.start_time.getTime()));
		dispatch(sessionIdSelected(item.session_id));
		dispatch(setSeatCost(hallInfo[0].cost)); //не забыть прикрутить сброс selectedHallCost
		dispatch(hallSelected(hallInfo[0].name));
	};

	const renderTimes = hall.map((item, index) => {
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

		return (
			<div 
				className={`cinema-hall__time ${styles}`}
				key={index} 
				onClick={() => onSelectingTime(item, hallInfo)}
			>{hours}:{minutes}</div>);
	});

	const content = !loading && !error ? <View times={renderTimes} hallInfo={hallInfo} hall_id={hall_id}/> : null;
	const isLoading = loading && !error ? <Spinner/> : null;

	// console.log('RENDER CINEMA HALL');

	return (
		<>
			{content}
			{isLoading}
		</>
	);
}

const View = React.memo(({ times, hallInfo }) => {
	// console.log('RENDER CINEMA HALL VIEW');
	return (
		<div className="cinema-hall" >

			<div className="cinema-hall__info">
				<div className="cinema-hall__name">{hallInfo[0].name}</div> {/* убрать обращение через первый элемент в массиве */}
				<div className="cinema-hall__cost">{hallInfo[0].cost}$</div>
			</div>

			<div className="cinema-hall__times">
				{
					times
				}
			</div>

		</div>
	);
});

export default CinemaHall;