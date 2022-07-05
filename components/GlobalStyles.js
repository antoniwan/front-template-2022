import { createGlobalStyle } from "styled-components";

const GlobalStylesheet = createGlobalStyle`

  // Global CSS Variables
  :root {
    /* Fonts */
    --font-sans: 'Open Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    --font-serif: Georgia, Times, serif;
    --font-mono: Menlo, Courier, monospace;

    /* Colors */
    --green: #2ea44f;
    --red: #ff0000;
    --black: #393939;
    --grey: #393939;
    --gray: var(--grey);
    --lightGray: #FAFBFC;
    --lightGray: var(--lightGray);
    --white: #ffffff;
    --offWhite: #ededed;
    --progress-color: var(--black);

    /* Misc. */
    --maxWidth: 1200px;
    --bs: 0 12px 24px 0 rgba(0,0,0,0.09);
    --br: 6px;
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
    text-decoration: underline;
    color: ${({ theme }) => theme.text};
  }
  a:hover {
    
  }
  a:active,
  a.active-link {
    font-weight: bold;
  }
  
  // Buttons
  button {
    font-family: var(--font-sans);
    color: ${({ theme }) => theme.text};
    background-color: var(--lightGray);
    appearance: none;
    border: 1px solid rgba(27, 31, 35, 0.15);
    border-radius: var(--br);
    box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-block;
    font-size: 1.4rem;
    font-weight: light;
    line-height: 2rem;
    list-style: none;
    padding: 6px 16px;
    position: relative;
    transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: middle;
    white-space: nowrap;
    word-wrap: break-word;
  }
  button:hover {
    background-color: #F3F4F6;
    text-decoration: none;
    transition-duration: 0.1s;
  }

  // Horizontal Rulers
  hr {
    border: 1px solid ${({ theme }) => theme.text};
    background: ${({ theme }) => theme.text};
    border-radius: var(--br);
    height: 5px;
    opacity: 0.666;
  }

  // Typography
  h1 {
    font-size: 3.8rem;
    line-height: 5rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.9rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 2.2rem;
    margin-bottom: 1rem;
  }

  // Lists
  ul {
    li {
      margin-top: 1rem;
    }
  }
  
`;

export default GlobalStylesheet;
