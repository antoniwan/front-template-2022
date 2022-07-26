import Head from "next/head";
import SignIn from "@/components/SignIn";

export default function SignInPage() {
  return (
    <>
      <Head>
        <title>Join Us!</title>
      </Head>

      <div className="fixed-width-container">
        <h1>Sign in to MyApp</h1>
        <hr />
        <SignIn />
      </div>
    </>
  );
}
