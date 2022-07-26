import Head from "next/head";
import PostsList from "../components/PostsList";

export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome</title>
        <meta name="description" content="Home page" />
      </Head>

      <div className="fixed-width-container">
        <h1>Hello, World!</h1>
        <hr />
        <p>
          Welcome to my highly-opinionated React template web application built
          with NextJS, TypeScript, styled-components, and Apollo GraphQL.
        </p>
        <PostsList />
      </div>
    </>
  );
}
