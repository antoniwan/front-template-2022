import { DocumentRenderer } from "@keystone-6/document-renderer";
import Image from "next/image";
import styled from "styled-components";

const StyledPost = styled.div`
  margin: 10px;

  h3 {
    font-size: 1.5rem;
    font-weight: 900;
    padding: 0;
    margin: 0;
    margin-bottom: 1rem;
  }

  p {
    margin-top: 0;
  }

  span {
  }

  .post-info-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    align-content: flex-start;
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }

  .post-author {
  }
  .post-author-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    justify-items: center;
    align-items: center;
  }

  .post-info-name-and-date-wrapper {
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    align-items: flex-start;
    align-content: center;
  }

  .post-date,
  .post-author-displayName,
  .post-author-username,
  .post-author-name {
    font-size: 1rem;
    margin-right: 8px;
  }
  .post-author-displayName {
    font-weight: bold;
  }

  .post-author-avatar-wrapper {
    margin-right: 10px;
    img {
      border-radius: 20px;
    }
  }
`;

export default function Post({ post }: { post: any }) {
  console.log(post);
  const hasTitle = post.title ? true : false;
  const hasAuthorInformation = post.author.id ? true : false;
  const hasProfilePicture = post.author.images.length !== 0;
  const profilePicture = post.author.images[0];

  return (
    <StyledPost className={`post post-${post.id}`}>
      {hasAuthorInformation && (
        <div className="post-info">
          <div className="post-info-wrapper">
            {hasProfilePicture && (
              <span className="post-author-avatar-wrapper">
                <Image
                  src={profilePicture.image.publicUrl}
                  alt=""
                  width="40"
                  height="40"
                  layout="intrinsic"
                />
              </span>
            )}

            <div className="post-info-name-and-date-wrapper">
              <div className="post-info-name-wrapper">
                {post.author.displayName && (
                  <span className="post-author-displayName">
                    {post.author.displayName}
                  </span>
                )}
                {post.author.username && (
                  <span className="post-author-username">
                    @{post.author.username}
                  </span>
                )}
              </div>

              <div className="post-date-wrapper">
                <span className="post-date">December 12, 2019</span>
              </div>
            </div>
          </div>
        </div>
      )}
      {hasTitle && <h3 className="post-title">{post.title}</h3>}
      <DocumentRenderer document={post.content.document} />
    </StyledPost>
  );

  // TODO: post element layout title or no title
  // TODO: ^ layout with author info or no author info
}
