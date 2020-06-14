import React from 'react';
import {storiesOf} from '@storybook/react';
import StoryRouter from 'storybook-react-router';
import RepositoryItem from './index';

export default {
	component: RepositoryItem,
	title: 'Repository list item'
}

export const exampleData = {
	node: {
		name: 'Example',
		descriptionHTML: 'Description',
		owner: {
			login: 'Owner',
			avatarUrl: 'https://api.adorable.io/avatars/234/abott@adorable.png'
		},
		stargazers: { totalCount: 1 }
	}
}

storiesOf('Repository list item', module)
	.addDecorator(StoryRouter())
	.add('Example data', () => (<RepositoryItem repo={exampleData}/>));
