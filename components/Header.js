import Link from "next/link";
import styled from "styled-components";
import Nav from "./Nav";
import ThemeToggle from "./ThemeToggle";
import { useDarkMode } from "next-dark-mode";

const Logo = styled.h1`
  margin: 0;
  font-size: 1.4rem;
  font-weight: bold;
`;

const HeaderStyles = styled.header`
  display: flex;
  position: relative;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  height: 50px;
  width: 100%;
  margin: 0 auto;
  min-height: 0px;
  min-width: 0px;
  padding-top: 0px;
  padding-left: 15px;
  padding-right: 15px;
  z-index: 0;

  .first-section,
  .logo-section {
    display: flex;
    position: relative;
    flex-basis: auto;
    flex-direction: column;
    flex-shrink: 0;
    margin: 0px;
    padding: 0px;
    align-self: stretch;
    align-items: flex-start;
    justify-content: center;
    min-width: 50px;
    min-height: 30px;
    z-index: 0;

    a {
      text-decoration: none;
    }
  }

  .mid-section,
  .search-section {
    display: flex;
    position: relative;
    flex-basis: auto;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    flex-grow: 1;
    flex-shrink: 1;
    height: 100%;
    margin: 0px;
    padding: 0px;
    z-index: 0;
  }

  .outer-section {
    display: flex;
    position: relative;
    flex-basis: auto;
    flex-direction: column;
    flex-shrink: 0;
    align-items: flex-end;
    align-self: stretch;
    justify-content: center;
    margin: 0px;
    padding: 0px;
    min-width: 50px;
    min-height: 30px;
  }

  @media (min-width: 640px) {
  }
  @media (min-width: 768px) {
  }
  @media (min-width: 1024px) {
  }
  @media (min-width: 1280px) {
  }
  @media (min-width: 1536px) {
  }
`;

export default function Header() {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();
  const toggleDarkMode = () =>
    darkModeActive ? switchToLightMode() : switchToDarkMode();
  const activeTheme = darkModeActive ? "dark" : "light";
  return (
    <HeaderStyles>
      <div className="logo-section">
        <Logo>
          <Link href="/">
            <a>MyApp</a>
          </Link>
        </Logo>
      </div>
      <div className="mid-section">
        <Nav />
      </div>
      <div className="outer-section">
        <ThemeToggle theme={activeTheme} toggleTheme={toggleDarkMode} />
      </div>
    </HeaderStyles>
  );
}
