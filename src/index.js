// @flow strict
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { configureUrlQuery } from 'react-url-query';
import history from 'history/browser';
import * as serviceWorker from './serviceWorker';
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client';
import App from './App';
import './styles/index.scss';

configureUrlQuery({ history });

ReactDOM.render(
	<BrowserRouter>
		<ApolloProvider client={client}>
			<App/>
		</ApolloProvider>
	</BrowserRouter>,
	document.getElementById('root')
);

serviceWorker.unregister();
