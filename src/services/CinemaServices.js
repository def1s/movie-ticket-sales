import { useHttp } from "../hooks/http.hook";

const useCinemaServices = () => {

	const {request, clearError, loading, error} = useHttp();

	const getFilms = async (url) => {
		const res = request(url);
		return await res;
	};

	return {getFilms, loading, error, clearError};
}

export default useCinemaServices;