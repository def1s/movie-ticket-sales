import { useHttp } from "../hooks/http.hook";

const useCinemaServices = () => {

	const {request, clearError, loading, error} = useHttp();

	const login = async (url, data) => {
		const res = request(url, 'POST', data);
		return await res;
	};

	const jwtCheck = async (url, token) => {
		const res = request(url, 'POST', null, { Authorization: `Bearer ${token}` });
		return await res;
	}

	//снести все одинаковые функции
	const getFilms = async (url) => {
		const res = request(url);
		return await res;
	};

	const getFilm = async (url) => {
		const res = request(url);
		return await res;
	}

	const getSessions = async (url) => {
		const res = await request(url);
		return await res;
	}

	const getHall = async (url) => {
		const res = request(url);
		return await res;
	}

	const getTickets = async (url) => {
		const res = request(url);
		return await res;
	}

	return {getFilms, getFilm, getSessions, getHall, getTickets, loading, error, clearError, login, jwtCheck};
}

export default useCinemaServices;