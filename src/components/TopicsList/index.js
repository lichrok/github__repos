import React from 'react';
import { TopicsListProps } from '../../types';
import './styles.scss';

export const TopicsList = ({ topics }: TopicsListProps) => (
	<ul className="topics-list">
		{console.log(topics)}
		{topics.map(({ node }) => <li key={node.topic.id}>{node.topic.name}</li>)}
	</ul>
);
