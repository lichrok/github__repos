// @flow
import React, { useState } from 'react';
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import RepositoryList from '../components/RepositoryList';
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

	return (
		<>
			<header className="header">
				<div className="container">
					<h1>Github search</h1>
					<SearchBar value={searchTerm} onChange={(value) => {
						setSearchTerm(value);
						onChangeUrlQueryParams({
							search: value
						})
					}}/>
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
