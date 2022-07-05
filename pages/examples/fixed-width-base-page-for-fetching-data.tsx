import { gql } from "@apollo/client";
import client from "../../libraries/apollo-client";
import Head from "next/head";
// import ClientOnly from "../../components/ClientOnly";
// import UserImages from "../../components/UserImages";

export default function FixedWidthBasePage() {
  return (
    <>
      <Head>
        <title>Fetching Data on a fixed width base page example</title>
        <meta name="description" content="Home page" />
      </Head>

      <div className="fixed-width-container">
        <h1>Fetching data with the Apollo GraphQL Client</h1>
        <hr />
        {/* <ClientOnly>
          <UserImages />
        </ClientOnly> */}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query UserImages {
        userImages {
          id
          title
          image {
            publicUrl
          }
        }
      }
    `,
  });

  console.log(data);

  return {
    props: {
      userImages: data.userImages.slice(0, 5), // only get first 5 for this example
    },
  };
}
