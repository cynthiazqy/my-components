// src/pages/HomePage.tsx
import React from 'react';
import useFetch from '../../hooks/useFetch';
import { useHistory } from 'react-router-dom';

const HomePage: React.FC = () => {
	const { data, loading, error } = useFetch('/users');
	const history = useHistory();

	if (loading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>;

	return (
		<div>
			<button onClick={() => history.push('/about')}>去 About 页面</button>
		</div>
	);
};

export default HomePage;
