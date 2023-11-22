import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	films: [],
	selectedFilm: {}
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
		}
	}
});

const {actions, reducer} = filmsSlice;

export default reducer;
export const {
	filmsFetched,
	filmSelecting
} = actions;