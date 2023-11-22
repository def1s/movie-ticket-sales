import { configureStore } from "@reduxjs/toolkit";
import films from '../slices/films';
import times from '../slices/times';
import sessions from '../slices/sessions';

const store = configureStore({
	reducer: {films, times, sessions},
	devTools: process.env.NODE_ENV === 'development'
});

export default store;