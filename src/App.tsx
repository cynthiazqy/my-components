// src/App.tsx
import React from 'react';
import Routes from './routes';
import './App.css';

const App: React.FC = () => {
	return (
		<div>
			<h1>My App</h1>
			<Routes />
		</div>
	);
};

export default App;
