// src/routes.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';

const Routes: React.FC = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/about" component={AboutPage} />
			</Switch>
		</Router>
	);
};

export default Routes;
