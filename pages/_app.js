import Router from "next/router";
import NProgress from "nprogress";
import BasePage from "../layouts/BasePage";
import "sanitize.css";
import "sanitize.css/typography.css";
import "sanitize.css/assets.css";
import "sanitize.css/forms.css";
import GlobalStylesheet from "../components/globalstyles";

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
