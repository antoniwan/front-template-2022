import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  background: none;
  border: 0px solid black;
  padding: 0;
  margin: 0;
  border-radius: unset;
  box-shadow: unset;
  span {
    font-size: 1.8rem;
  }

  &:hover {
    background: none;
    border: 0;
  }
`;

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <Button onClick={toggleTheme}>
      {theme === "light" ? <span>🌖</span> : <span>🌞</span>}
    </Button>
  );
};

export default ThemeToggle;
