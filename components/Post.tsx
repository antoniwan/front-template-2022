import { DocumentRenderer } from "@keystone-6/document-renderer";
import Image from "next/image";
import styled from "styled-components";
import { formatDistance, parseJSON } from "date-fns";

const StyledPost = styled.div`
  padding: 20px;
  border-radius: 6px;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  justify-items: center;
  align-items: stretch;
  align-content: center;
  margin-bottom: 20px;
  border: ${({ theme }) => theme["box-border"]};
  background: ${({ theme }) => theme["box-background"]};
  transition: border-color 100ms linear, box-shadow 100ms linear;

  &:hover {
    border-color: rgba(0, 0, 0, 0.2);
    box-shadow: 0 4px 12px rgb(0 0 0 / 10%);
  }

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
    align-items: center;
    align-content: flex-start;
    flex-wrap: nowrap;
    margin-bottom: 8px;
  }
  .post-info-name-wrapper {
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
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
    font-size: 1.4rem;
  }

  .post-author-avatar-wrapper {
    margin-right: 10px;
    img {
      border-radius: 6px;
    }
  }

  .post-date {
    opacity: 0.75;
  }

  .post-content {
    margin-top: 10px;

    *:last-child {
      margin-bottom: 0;
    }
  }
`;

export default function Post({ post }: { post: any }) {
  console.log(post);
  const hasTitle = post.title ? true : false;
  const hasAuthorInformation = post.author.id ? true : false;
  const hasProfilePicture = post.author.images.length !== 0;
  const profilePicture = post.author.images[0];
  const todaysDate = Date.now();
  const publishedOnDate = parseJSON(post.publishDate);
  const createdOnVerbose = formatDistance(publishedOnDate, todaysDate);

  return (
    <StyledPost className={`post post-${post.id}`}>
      <div className="post-header">
        <div className="post-header-info">
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
                    <span className="post-date">{createdOnVerbose} ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {!hasAuthorInformation && (
            <div className="post-info">
              <div className="post-info-wrapper">
                <div className="post-info-name-and-date-wrapper">
                  <div className="post-info-name-wrapper">
                    <span className="post-author-displayName">System</span>
                  </div>

                  <div className="post-date-wrapper">
                    <span className="post-date">{createdOnVerbose} ago</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="post-header-toolbar"></div>
      </div>

      <div className="post-content">
        {hasTitle && <h3 className="post-title">{post.title}</h3>}
        <DocumentRenderer document={post.content.document} />
      </div>
    </StyledPost>
  );
}
