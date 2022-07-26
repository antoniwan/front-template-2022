import styled from "styled-components";
import BetterLink from "./BetterLink";
import useUser from "../hooks/useUser";

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
    text-decoration: none;
  }
  a:last-child {
    margin-right: 0px;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export default function Nav() {
  const user = useUser();

  console.log(`nav user`, user);
  return (
    <NavStyles>
      <BetterLink href="/examples">
        <a>Examples</a>
      </BetterLink>

      <>
        <BetterLink href="/sign-in">
          <a>Sign in</a>
        </BetterLink>
      </>

      <>
        <BetterLink href="/account">
          <a>My Account</a>
        </BetterLink>
        <BetterLink href="/account/log-out">
          <a>Log Out</a>
        </BetterLink>
      </>
    </NavStyles>
  );
}
