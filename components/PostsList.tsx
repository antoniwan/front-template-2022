import { gql, useQuery } from "@apollo/client";
import Post from "./Post";
import LoaderSpinner from "./LoaderSpinner";

const GET_POSTS_QUERY = gql`
  query GetPosts {
    posts {
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

export default function PostItems() {
  const { loading, error, data } = useQuery(GET_POSTS_QUERY);
  if (loading) return <LoaderSpinner />;
  if (error) return <p className="error">Error! {error.message}.</p>;
  return (
    <div className="recent-posts-wrapper">
      <h2>Recent Posts</h2>
      {data.posts &&
        data.posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
    </div>
  );
}
