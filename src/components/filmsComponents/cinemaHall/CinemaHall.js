import './cinemaHall.scss';

import useCinemaServices from '../../../services/CinemaServices';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { timeSelecting } from '../../../slices/times';
import { sessionIdSelected } from '../../../slices/sessions';
import { hallSelected } from '../../../slices/halls';
import { setSeatCost } from '../../../slices/cost';

import Spinner from '../../common/spinner/Spinner';

const CinemaHall = ({ hall, hall_id }) => { //изменить имя переменной hall
	const {getData, loading, error} = useCinemaServices();

	const dispatch = useDispatch();
	const selectedTime = new Date(useSelector(state => state.times.selectedTime));

	const [hallInfo, setHallInfo] = useState([{}]);

	useEffect(() => {
		getData(`/api/halls/${hall_id}`)
			.then(result => setHallInfo(result.data[0]))
			.catch(err => console.log(err));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [hall_id]);

	const onSelectingTime = (item, hallInfo) => {
		dispatch(timeSelecting(item.start_time.getTime()));
		dispatch(sessionIdSelected(item.session_id));
		dispatch(setSeatCost(hallInfo.cost));
		dispatch(hallSelected(hallInfo.name));
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
			<button 
				className={`cinema-hall__time ${styles}`}
				key={index} 
				onClick={() => onSelectingTime(item, hallInfo)}
			>{hours}:{minutes}</button>);
	});

	const content = !loading && !error ? <View times={renderTimes} hallInfo={hallInfo} hall_id={hall_id}/> : null;
	const isLoading = loading && !error ? <Spinner/> : null;

	return (
		<>
			{content}
			{isLoading}
		</>
	);
}

const View = React.memo(({ times, hallInfo }) => {
	return (
		<div className="cinema-hall" >

			<div className="cinema-hall__info">
				<div className="cinema-hall__name">{hallInfo.name}</div>
				<div className="cinema-hall__cost">{hallInfo.cost}$</div>
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