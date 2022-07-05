import Head from "next/head";
import Link from "next/link";

export default function Examples() {
  return (
    <>
      <Head>
        <title>Examples!</title>
        <meta name="description" content="Examples" />
      </Head>

      <div className="fixed-width-container">
        <h1>Examples</h1>
        <hr />
        <ul>
          <li>
            <Link href="/examples/fetching-data/static">
              <a>Data Fetching: Static</a>
            </Link>
          </li>
          <li>
            <Link href="/examples/fetching-data/server-side">
              <a>Data Fetching: Server Side</a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
