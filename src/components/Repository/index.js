// @flow strict
import React from 'react';
import { TopicsList } from '../TopicsList';
import { formatDate } from '../../utils';
import { RepositoryTemplateProps } from '../../types';
import './styles.scss';

function RepositoryTemplate({ data }: RepositoryTemplateProps) {
	const {
		createdAt,
		description,
		forkCount,
		name,
		owner,
		url,
		updatedAt,
		repositoryTopics: {
			edges
		}
	} = data;

	return (
		<>
			<header className="header">
				<div className="container">
					<h1>{name}</h1>
					<p className="header-description">{description}</p>
					{edges.length ? <TopicsList topics={edges}/> : null}
				</div>
			</header>
			<main className="main">
				<div className="container">
					<ul className="repository-info-list">
						<li>
							<a
								className="link link_theme_flex"
								href={owner.url}
								target="_blank"
								rel="noopener noreferrer"
							>
								<img
									className="repository-info-list__avatar"
									src={owner.avatarUrl}
									alt={owner.login}
								/>
								{owner.login}
							</a>
						</li>
						<li>
							<b>Created: </b>
							{formatDate(createdAt)}
						</li>
						<li>
							<b>Updated: </b>
							{formatDate(updatedAt)}
						</li>
						<li>
							<b>Forks: </b> {forkCount}
						</li>
						<li>
							<a
								className="link"
								href={url}
								target="_blank"
								rel="noopener noreferrer"
							>
								Repository link
							</a>
						</li>
					</ul>
				</div>
			</main>
		</>
	)
}

export default RepositoryTemplate;
