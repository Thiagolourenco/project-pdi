import {gql} from '@apollo/client';

export const GetUser = gql`
  query Query {
    user(login: "Thiagolourenco") {
      login
      avatarUrl
      company
      name
    }
  }
`;

export const GetRepositories = gql`
  query ($number_of_repos: Int!) {
    user(login: "Thiagolourenco") {
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
