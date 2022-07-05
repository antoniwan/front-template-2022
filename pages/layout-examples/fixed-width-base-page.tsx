import Head from "next/head";

export default function FixedWidthBasePage() {
  return (
    <>
      <Head>
        <title>Fixed Width Container Base Page</title>
        <meta name="description" content="Home page" />
      </Head>

      <div className="fixed-width-container">
        <h1>Fixed Width Container Base Page</h1>
      </div>
    </>
  );
}
