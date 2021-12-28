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
