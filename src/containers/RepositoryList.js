// @flow strict
import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { useDebounce } from 'use-debounce';
import { SEARCH_FOR_REPOS } from '../api/queries';
import RepositoryItem from '../components/RepositoryItem';
import Loader from '../components/Loader';
import { RepositoryListProps, SearchDataProps } from '../types';

const DEBOUNCE_DELAY = 800;

function RepositoryList({ searchTerm }: RepositoryListProps) {
	const [debouncedSearchTerm] = useDebounce(searchTerm, DEBOUNCE_DELAY);
	const { data, loading, error }: SearchDataProps = useQuery(
		SEARCH_FOR_REPOS,
		{ variables: { search_term: debouncedSearchTerm } }
	);

	if (loading) {
		return <Loader/>
	}

	if (error) {
		return <p className="is-error">Error: {error}</p>
	}

	if (!data.search.repositoryCount) {
		return <p>No repositories.</p>
	}

	return (
		<div className="repository-list">
			{data.search.edges.map(repo => <RepositoryItem repo={repo} key={repo.node.id}/>)}
		</div>
	)
}

export default RepositoryList;
