import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_REPO_DATA } from '../api/queries';
import Loader from '../components/Loader';
import RepositoryTemplate from '../components/Repository';
import { RepositoryProps, RepositoryDataProps } from '../types';

function Repository({ match }: RepositoryProps) {
	const repoParams = match.params.repositoryParams.split('|');

	const { data, loading, error }: RepositoryDataProps = useQuery(
		GET_REPO_DATA,
		{
			variables: {
				name: repoParams[0],
				owner: repoParams[1]
			}
		});

	if (loading) {
		return <Loader/>
	}

	if (error) {
		return <p className="is-error">Error: {error}</p>
	}

	return (
		<RepositoryTemplate data={data.repository}/>
	)
}

export default Repository;
