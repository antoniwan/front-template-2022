import Router from "next/router";
import NProgress from "nprogress";
import BasePage from "../layouts/BasePage";
import GlobalStylesheet from "../components/globalstyles";
import "nprogress/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStylesheet />
      <BasePage>
        <Component {...pageProps} />
      </BasePage>
    </>
  );
}

export default MyApp;
