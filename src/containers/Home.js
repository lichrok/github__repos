// @flow
import React, { useState, useCallback } from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import RepositoryList from './RepositoryList';
import SearchBar from '../components/SearchBar';
import { HomeProps } from '../types';

const urlPropsQueryConfig = {
	search: UrlQueryParamTypes.string
}

function Home({ onChangeUrlQueryParams, search }: HomeProps) {
	const defaultProps = {
		search: search || ''
	}
	const [searchTerm, setSearchTerm] = useState(defaultProps.search);
	const onChangeHandle = useCallback((value) => {
		setSearchTerm(value);
		onChangeUrlQueryParams({
			search: value
		});
	}, [searchTerm]);

	return (
		<>
			<header className="header">
				<div className="container">
					<h1>Github search</h1>
					<SearchBar value={searchTerm} onChange={onChangeHandle}/>
				</div>
			</header>
			<main className="main">
				<div className="container">
					<RepositoryList searchTerm={searchTerm}/>
				</div>
			</main>
		</>
	)
}

export default addUrlProps({ urlPropsQueryConfig })(Home);
