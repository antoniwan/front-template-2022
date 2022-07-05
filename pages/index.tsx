import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Home page" />
      </Head>

      <div className="fixed-width-container">
        <h1>Main!</h1>
      </div>
    </>
  );
}
