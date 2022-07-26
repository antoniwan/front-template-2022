import styled from "styled-components";
import { SessionContext, useSessionContext } from "../context/session";
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
    text-decoration: none;
  }
  a:last-child {
    margin-right: 0px;
  }
  a:hover {
    text-decoration: underline;
  }
`;

function Nav() {
  const [sessionState, setSessionState] = useSessionContext(SessionContext);
  const { isAuthenticated } = sessionState;

  const handleLogout = () => {
    setSessionState({
      ...sessionState,
      isAuthenticated: false,
      user: undefined,
    });
  };

  return (
    <NavStyles>
      <BetterLink href="/examples">
        <a>Examples</a>
      </BetterLink>

      {!isAuthenticated && (
        <>
          <BetterLink href="/sign-in">
            <a>Sign in</a>
          </BetterLink>
        </>
      )}

      {isAuthenticated && (
        <>
          <BetterLink href="/account">
            <a>My Account</a>
          </BetterLink>
          <button onClick={handleLogout}>Log Out</button>
        </>
      )}
    </NavStyles>
  );
}

export default Nav;
