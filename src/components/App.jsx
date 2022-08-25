import { GlobalStyle } from 'components/GlobaleStyle';
import Feedback from './Feedback/Feedback';
import styled from 'styled-components';

const Box = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;

export const App = () => {
  return (
    <Box>
      <GlobalStyle />
      <Feedback />
    </Box>
  );
};
