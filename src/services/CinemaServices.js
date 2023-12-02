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
	};

	const jwtAuthenticatedPostRequest = async (url, data, token) => {
		const res = request(url, 'POST', data, { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' });
		return await res;
	};

	const getData = async (url) => {
		const res = request(url);
		return await res;
	};

	const getAuthenticatedData = async (url, token) => {
		const res = request(url, 'GET', null, { Authorization: `Bearer ${token}` });
		return await res;
	};

	return { loading, error, clearError, login, jwtCheck, jwtAuthenticatedPostRequest, getData, getAuthenticatedData };
}

export default useCinemaServices;