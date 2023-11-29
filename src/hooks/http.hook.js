import { useCallback, useState } from "react";

export const useHttp = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {
		setLoading(true);

		try {
			const response = await fetch(url, {method, headers, body});
			const res = await response.json();

			if (!response.ok) {
				throw res;
			}
			
			setLoading(false);
			return res;
		} catch(e) {
			setLoading(false);
			setError(e.message);
			throw e;
		}
	}, []);

	const clearError = () => {
		setError(null);
	}

	return {loading, request, error, clearError};
}