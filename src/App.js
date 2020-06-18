// @flow strict
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './containers/Home';
import Repository from './containers/Repository';

function App() {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route path="/repository/:repositoryParams" component={Repository}/>
		</Switch>
	);
}

export default App;
