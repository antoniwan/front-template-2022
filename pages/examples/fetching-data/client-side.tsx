import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { userImagesQuery as exampleQuery, UserImagesContainer } from "./static";
import ClientOnly from "components/ClientOnly";

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
          page request,{" "}
          <strong>on the client-side (the user&apos;s browser)</strong>. Data is
          then passed to the <i>page</i> component as props.
        </p>

        <ClientOnly>
          <BuildUserImages userImagesQuery={exampleQuery} />
        </ClientOnly>

        <Link href="/examples">
          <button>Back to the /examples page</button>
        </Link>
      </div>
    </>
  );
}

function BuildUserImages({ userImagesQuery }) {
  const { data, loading, error } = useQuery(userImagesQuery);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    console.error(error);
    return <h2>API Unreachable!</h2>;
  }

  const userImages = data.userImages.slice(0, 5);

  return (
    <UserImagesContainer>
      {userImages &&
        userImages.map((uImage) => (
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
  );
}
