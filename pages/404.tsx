import Head from "next/head";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Oops! 404!!!</title>
        <meta name="description" content="404 page" />
      </Head>

      <div className="fixed-width-container">
        <h1>UH-OH! WHOOPS!</h1>
        <h2>Something went wrong</h2>
        <p>{"This page doesn't exist."}</p>
      </div>
    </>
  );
}
