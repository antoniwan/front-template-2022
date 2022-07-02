import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  border: 0px solid black;
  span {
    font-size: 1.8rem;
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
