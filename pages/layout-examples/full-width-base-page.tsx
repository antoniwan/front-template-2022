import Head from "next/head";

export default function FullWidthBasePage() {
  return (
    <>
      <Head>
        <title>Full Width Container Base Page</title>
        <meta name="description" content="Home page" />
      </Head>

      <div className="full-width-container">
        <h1>Full Width Container Base Page</h1>
      </div>
    </>
  );
}
