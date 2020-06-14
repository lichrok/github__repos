import gql from 'graphql-tag';

export const SEARCH_FOR_REPOS = gql`
    query($search_term: String!) {
        search(query: $search_term, type: REPOSITORY, first: 50) {
            repositoryCount,
            edges {
                node {
                    ... on Repository {
                        id,
                        name,
                        owner {
                            login,
                            avatarUrl,
                        },
                        stargazers {
                            totalCount
                        },
                        descriptionHTML,
                    }
                }
            }
        }
    }
`;

export const GET_REPO_DATA = gql`
    query($name: String!, $owner: String!) {
        repository(name: $name, owner: $owner) {
            createdAt,
            description,
            forkCount,
            name,
            owner {
                avatarUrl,
                login,
                url
            },
            url,
            updatedAt,
            repositoryTopics(first: 10) {
                edges {
                    node {
                        topic {
                            id,
                            name
                        }
                    }
                }
            }
        }
    }
`;
