import styled from "styled-components";
import { useRouter } from "next/router";
import BetterLink from "./BetterLink";
import { sessionData } from "libs/apollo";

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
  const router = useRouter();
  const isAuthenticated = sessionData().isAuthenticated;

  const handleLogout = async () => {
    await sessionData({
      ...sessionData(),
      isAuthenticated: false,
      user: undefined,
    });
    router.push("/");
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
