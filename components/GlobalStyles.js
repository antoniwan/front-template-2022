import { createGlobalStyle } from "styled-components";

const GlobalStylesheet = createGlobalStyle`

  // Global CSS Variables
  :root {
    /* Fonts */
    --font-sans: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-serif: Georgia, Times, serif;
    --font-mono: Menlo, Courier, monospace;

    /* Colors */
    --red: #ff0000;
    --black: #393939;
    --grey: #393939;
    --gray: var(--grey);
    --lightGray: #e1e1e1;
    --lightGray: var(--lightGray);
    --white: #ffffff;
    --offWhite: #ededed;
    --progress-color: var(--black);

    /* Misc. */
    --maxWidth: 1200px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --br: 12px;
  }


  // Body / Global
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: var(--font-sans);
    font-size: 1.6rem;
    line-height: 1.6rem;
    font-weight: 400;
    font-style: normal;
    letter-spacing: 0;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  // Progress Bar
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${({ theme }) => theme.text};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0  ${({ theme }) => theme.text}, 0 0 5px ${({ theme }) =>
  theme.text};
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }

  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    bottom: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: ${({ theme }) => theme.text};
    border-left-color: ${({ theme }) => theme.text};
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  // Links
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
  a:hover {
    text-decoration: underline;
  }
  a:active,
  a.active-link {
    font-weight: bold;
  }
  
  // Buttons
  button {
    font-family: var(--font-sans);
  }

  // Horizontal Rulers
  hr {
    border: 1px solid var(--black);
    background: var(--black);
    border-radius: var(--br);
    height: 5px;
    opacity: 0.666;
  }

  // Typography
  h1 {
    font-size: 2.4rem;
    line-height: 3rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    margin-bottom: 1rem;
  }

  
`;

export default GlobalStylesheet;
