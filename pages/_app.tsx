import { AppProps } from "next/app";
import Router from "next/router";
import withDarkMode from "next-dark-mode";
import NProgress from "nprogress";
import BasePage from "../layouts/BasePage";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../components/Themes";
import "sanitize.css";
import "sanitize.css/typography.css";
import "sanitize.css/assets.css";
import "sanitize.css/forms.css";
import GlobalStylesheet from "../components/globalstyles";
import { ApolloProvider } from "@apollo/client";
import client from "../libraries/apollo-client";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function App({ Component, darkMode, pageProps }: AppProps & { darkMode }) {
  const { darkModeActive } = darkMode;
  const activeTheme = darkModeActive ? darkTheme : lightTheme;
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={activeTheme}>
        <GlobalStylesheet />
        <BasePage>
          <Component {...pageProps} />
        </BasePage>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default withDarkMode(App);
