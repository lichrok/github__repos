// @flow strict
export type HomeProps = {
	onChangeUrlQueryParams: ({search: string}) => {search: string},
	search: string
}

export type RepositoryListProps = {
	searchTerm: string
}

export type SearchDataProps = {
	data: {
		search: {
			repositoryCount: number,
			edges: Array<RepositoryItemProps>
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
			},
			primaryLanguage: {
				name: string
			},
			forkCount: number
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
		repository: RepositoryTemplateProps
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
			edges: Array<TopicsListProps>
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
