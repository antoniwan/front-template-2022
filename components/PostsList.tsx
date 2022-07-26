import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";
import Post from "./Post";
import LoaderSpinner from "./LoaderSpinner";

const GET_POSTS_QUERY = gql`
  query GetPosts {
    posts {
      publishDate
      id
      title
      content {
        document
      }
      author {
        id
        username
        displayName
        images(where: { type: { equals: profile_picture } }) {
          image {
            publicUrl
          }
        }
      }
    }
  }
`;

const StyledPostItems = styled.section`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export default function PostItems() {
  const { loading, error, data } = useQuery(GET_POSTS_QUERY);
  if (loading)
    return (
      <div style={{ marginTop: "40px", marginBottom: "40px" }}>
        <LoaderSpinner size={50} />
      </div>
    );
  if (error) return <p className="error">Error! {error.message}.</p>;
  return (
    <StyledPostItems>
      <h2>Recent Posts</h2>
      {data.posts &&
        data.posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </StyledPostItems>
  );
}
