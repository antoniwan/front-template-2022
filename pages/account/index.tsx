import Head from "next/head";

export default function AccountHomePage() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Home page" />
      </Head>

      <div className="fixed-width-container">
        <h1>Hello, Name!</h1>
        <hr />
      </div>
    </>
  );
}
