import {gql} from '@apollo/client';

export const GET_USER = gql`
  query getUser($username: String!) {
    user(login: $username) {
      login
      avatarUrl
      company
      name
    }
  }
`;

export const GetRepositories = gql`
  query ($number_of_repos: Int!, $username: String!) {
    user(login: $username) {
      repositories(last: $number_of_repos) {
        totalCount
        nodes {
          name
          createdAt
          id
          description
          languages(first: 10) {
            nodes {
              name
            }
          }
        }
      }
    }
  }
`;
