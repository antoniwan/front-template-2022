import BetterLink from "./BetterLink";
import styled from "styled-components";
import Nav from "./Nav";

const FooterStyles = styled.footer`
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

  .first-section {
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
  }

  .mid-section {
    display: flex;
    position: relative;
    flex-basis: auto;
    flex-direction: column;
    align-items: stretch;
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
    margin-left: 1rem;
  }

  p {
    margin: 0;
    padding: 0;
    font-size: 1rem;
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
  return (
    <FooterStyles>
      <div className="first-section">
        <p>Optional footer space, if required.</p>
      </div>
      <div className="outer-section">
        <p>No copyright &copy; 2022</p>
      </div>
    </FooterStyles>
  );
}
