import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	films: [],
	selectedFilm: {
		film_id: -1,
		title: '',
		duration: -1,
		description: '',
		cover: [] 
	},
	userFilms: []
}

const filmsSlice = createSlice({
	name: 'films',
	initialState,
	reducers: {
		filmsFetched: (state, action) => {
			state.films = action.payload;
		},
		filmSelecting: (state, action) => {
			state.selectedFilm = action.payload
		},
		setUserFilms: (state, action) => {
			state.userFilms = action.payload
		}
	}
});

const {actions, reducer} = filmsSlice;

export default reducer;
export const {
	filmsFetched,
	filmSelecting,
	setUserFilms
} = actions;