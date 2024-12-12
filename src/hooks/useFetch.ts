// src/hooks/useFetch.ts
import { useEffect, useState } from 'react';
import axiosClient from '../api/axiosClient';

const useFetch = (url: string) => {
	const [data, setData] = useState<any>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axiosClient.get(url);
				setData(response.data);
			} catch (err) {
				setError('Failed to fetch data');
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, [url]);

	return { data, loading, error };
};

export default useFetch;
