import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import client from "../../../libraries/apollo-client";
import { userImagesQuery, UserImagesContainer } from "./static";

export default function ExamplesFetchingDataStatic({ serverSideUserImages }) {
  return (
    <>
      <Head>
        <title>
          Fetching client-side page data with Apollo GraphQL and NextJS
        </title>
        <meta
          name="description"
          content="Fetching client-side page data with Apollo GraphQL and NextJS"
        />
      </Head>

      <div className="fixed-width-container">
        <h1>Fetching data with the Apollo GraphQL Client</h1>
        <hr />

        <h2>Example 3: Client-side rendered page data</h2>
        <p>
          The data below (public user-uploaded images) is fetched during the
          page request. Data is then passed to the <i>page</i> component as
          props.
        </p>

        <UserImagesContainer>
          {serverSideUserImages &&
            serverSideUserImages.map((uImage) => (
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

        <Link href="/examples">
          <button>Back to the /examples page</button>
        </Link>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: userImagesQuery,
  });
  return {
    props: {
      serverSideUserImages: data.userImages.slice(0, 5), // only get first 5 for this example
    },
  };
}
