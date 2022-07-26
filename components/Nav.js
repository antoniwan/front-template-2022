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
  const userIsAuthenticated =
    user === undefined || user === null ? false : true;

  console.log(userIsAuthenticated ? `User is auth!` : `User not auth`);
  return (
    <NavStyles>
      <BetterLink href="/examples">
        <a>Examples</a>
      </BetterLink>

      {!userIsAuthenticated && (
        <>
          <BetterLink href="/sign-in">
            <a>Sign in</a>
          </BetterLink>
        </>
      )}
      {userIsAuthenticated && (
        <>
          <BetterLink href="/account">
            <a>Account</a>
          </BetterLink>
          <BetterLink href="/account/log-out">
            <a>Log Out</a>
          </BetterLink>
        </>
      )}
    </NavStyles>
  );
}
