import React from 'react';
import { TopicsList } from './index';

export default {
	component: TopicsList,
	title: 'Topics list'
}

const EXAMPLE_DATA = [{
	node: {
		topic: {
			id: "MDU6VG9waWNqYXZhc2NyaXB0", name: "javascript",
		},
	},
}, {
	node: {
		topic: {
			id: "MDU6VG9waWNyZWFjdA==", name: "react",
		},
	},
}, {
	node: {
		topic: {
			id: "MDU6VG9waWNmcm9udGVuZA==", name: "frontend",
		},
	},
}, {
	node: {
		topic: {
			id: "MDU6VG9waWNkZWNsYXJhdGl2ZQ==", name: "declarative",
		},
	},
}, {
	node: {
		topic: {
			id: "MDU6VG9waWN1aQ==", name: "ui",
		},
	},
}, {
	node: {
		topic: {
			id: "MDU6VG9waWNsaWJyYXJ5", name: "library",
		},
	},
}];

export const DefaultTopicsList = () => <TopicsList topics={EXAMPLE_DATA}/>
