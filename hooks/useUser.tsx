import { gql, useQuery } from "@apollo/client";

export const GET_USER_QUERY = gql`
  query getAuthUser {
    authenticatedItem {
      ... on User {
        id
        email
        name
        displayName
        username
      }
    }
  }
`;

export default function useUser() {
  const { data } = useQuery(GET_USER_QUERY);
  return data?.authenticatedItem;
}
