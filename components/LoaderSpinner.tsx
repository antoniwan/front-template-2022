import styled, { withTheme } from "styled-components";
import { TailSpin } from "react-loader-spinner";

const StyledSpinner = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
`;

const LoaderSpinner = function (props) {
  const { theme } = props;
  const { size } = props;
  return (
    <StyledSpinner>
      <TailSpin color={theme.text} height={size || 50} width={size || 50} />
    </StyledSpinner>
  );
};

export default withTheme(LoaderSpinner);
