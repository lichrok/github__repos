export type HomeProps = {
	onChangeUrlQueryParams: Function,
	search: string
}

export type RepositoryListProps = {
	searchTerm: string
}

export type SearchDataProps = {
	data: {
		search: {
			repositoryCount: number,
			edges: Array
		}
	},
	loading: boolean,
	error: string
}

export type RepositoryItemProps = {
	repo: {
		node: {
			name: string,
			descriptionHTML: string,
			owner: { login: string, avatarUrl: string },
			stargazers: {
				totalCount: {
					totalStarCount: number
				}
			}
		}
	}
}

export type RepositoryProps = {
	match: {
		params: {
			repositoryParams: string
		}
	}
}

export type RepositoryDataProps = {
	data: {
		repository: Object
	},
	loading: boolean,
	error: string
}

export type RepositoryTemplateProps = {
	data: {
		createdAt: Date,
		description: string,
		forkCount: number,
		name: string,
		owner: {
			avatarUrl: string,
			url: string,
			login: string
		},
		url: string,
		updatedAt: Date,
		repositoryTopics: {
			edges: Array
		}
	}
}

export type TopicsListProps = {
	topics: [
		{
			node: {
				topic: {
					id: string,
					name: string
				}
			}
		}
	]
}
