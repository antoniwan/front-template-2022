import styled from "styled-components";
import Link from "next/link";
import BetterLink from "./BetterLink";

const NavStyles = styled.nav`
  position: relative;
  display: flex;
  flex-grow: 1;
  align-content: space-between;
  justify-content: space-between;
  align-items: center;
  min-height: 30px;
  min-width: 50px;

  a {
    font-size: 1.2rem;
    margin-right: 1rem;
  }
  a:last-child {
    margin-right: 0px;
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <BetterLink href="/layout-examples/fixed-width-base-page">
        <a>Example Page</a>
      </BetterLink>
      <BetterLink href="/layout-examples/full-width-base-page">
        <a>Example Page</a>
      </BetterLink>
    </NavStyles>
  );
}
