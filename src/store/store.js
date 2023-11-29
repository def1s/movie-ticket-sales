import { configureStore } from "@reduxjs/toolkit";
import films from '../slices/films';
import times from '../slices/times';
import sessions from '../slices/sessions';
import halls from '../slices/halls';
import tickets from '../slices/tickets';
import cost from '../slices/cost';
import auth from '../slices/auth';

const store = configureStore({
	reducer: { films, times, sessions, halls, tickets, cost, auth },
	devTools: process.env.NODE_ENV === 'development'
});

export default store;