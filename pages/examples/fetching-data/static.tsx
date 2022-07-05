import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { gql } from "@apollo/client";
import client from "../../../libraries/apollo-client";

// import ClientOnly from "../../components/ClientOnly";
// import UserImages from "../../components/UserImages";

export const UserImagesContainer = styled.div`
  margin: 1rem 0;
  margin-bottom: 2rem;
  display: flex;

  .userImage-item {
    display: block;
    width: 200px;
    border-radius: var(--br);
    overflow: hidden;
    margin: 1rem;
  }
`;

export default function ExamplesFetchingDataStatic({ staticUserImages }) {
  return (
    <>
      <Head>
        <title>
          Fetching statically rendered page data with Apollo GraphQL and NextJS
        </title>
        <meta
          name="description"
          content="Fetching statically rendered page data with Apollo GraphQL and NextJS"
        />
      </Head>

      <div className="fixed-width-container">
        <h1>Fetching data with the Apollo GraphQL Client</h1>
        <hr />

        <h2>Example 1: Statically rendered page data</h2>
        <p>
          The data below (public user-uploaded images) is fetched during the
          build process. Data is then passed to the <i>page</i> component as
          props.
        </p>

        <UserImagesContainer>
          {staticUserImages &&
            staticUserImages.map((uImage) => (
              <div
                key={uImage.id}
                className={`userImage-item userImage-item-${uImage.id}`}
              >
                <Image
                  layout="responsive"
                  src={uImage.image.publicUrl}
                  alt={`User Image ID: ${uImage.id}`}
                  width={120}
                  height={100}
                  objectFit={"fill"}
                  priority={true}
                />
              </div>
            ))}
        </UserImagesContainer>

        <Link href="/examples/fetching-data/server-side">
          <button>Next Example: Server-side data fetching!</button>
        </Link>
      </div>
    </>
  );
}

export const userImagesQuery = gql`
  query UserImages {
    userImages {
      id
      title
      image {
        publicUrl
      }
    }
  }
`;

export async function getStaticProps() {
  const { data } = await client.query({
    query: userImagesQuery,
  });
  return {
    props: {
      staticUserImages: data.userImages.slice(0, 5), // only get first 5 for this example
    },
  };
}
