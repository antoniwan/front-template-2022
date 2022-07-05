import { useQuery, gql } from "@apollo/client";

const getUserImagesQUERY = gql`
  query {

  }
`;

export default function UserImages() {
  const { data, loading, error } = useQuery(getUserImagesQUERY);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return <h2>API Server is offline or unreachable!</h2>;
  }

  console.log(data);

  return <div>UserImages</div>;
}
