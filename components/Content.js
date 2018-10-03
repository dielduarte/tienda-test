import styled from 'styled-components';

const Content = styled.section`
  flex: 2;
  height: 100vh;
  background-color: ${props => props.theme.lightGray};
  overflow-y: scroll;
  padding-bottom: 50px;
`;

export const ContentSpace = styled.div`
  padding: 0 20px;
`;

export default Content;
