import { useState, useEffect } from 'react';

const useFecth = (url) => {
	const [data, setData] = useState([]);
	const [isLoding, setIsLoading] = useState(true);
	const [error, setError] = useState('');
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				if (!response.ok) throw new Error('Error fecthing data');
				const data = await response.json();
				setData(data);
				setIsLoading(false);
			} catch (error) {
				console.error('Error data fectching', error.message);
				setError(error);
				setIsLoading(false);
			}
		};
		fetchData();
	}, [url]);
	return { data, isLoding, error };
};

export default useFecth;
