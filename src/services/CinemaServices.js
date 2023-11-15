import { useHttp } from "../hooks/http.hook";

const useCinemaServices = () => {

	const {request, clearError, loading, error} = useHttp();

	const getFilms = async (url) => {
		const res = request(url);
		return await res;
	};

	const getFilm = async (url) => {
		const res = request(url);
		return await res;
	}

	const getSessions = async (url) => {
		const res = request(url);
		return await res;
	}

	const getHall = async (url) => {
		const res = request(url);
		return await res;
	}

	return {getFilms, getFilm, getSessions, getHall, loading, error, clearError};
}

export default useCinemaServices;