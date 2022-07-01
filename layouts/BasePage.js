import styled, { createGlobalStyle } from "styled-components";
import Header from "../components/Header";

const GlobalStyles = createGlobalStyle`
    html {
        --red: #ff0000;
        --black: #393939;
        --grey: #393939;
        --gray: var(--grey);
        --lightGray: #e1e1e1;
        --lightGray: var(--lightGray);
        --offWhite: #ededed;
        --maxWidth: 1000px;
        --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
        box-sizing: border-box;
    }
    *,*:before, *:after {
      box-sizing: inherit;
    }
    body {
      font-family: 'Open Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
    }
    a {
      text-decoration: none;
      color: var(--black);
    }
    a:hover {
      text-decoration: underline;
    }
    button {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 2ren;
`;

export default function BasePage({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}
