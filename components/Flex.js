import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: ${props => (props.wrap ? 'wrap' : 'nowrap')};
`;

export const ResponsiveRow = styled(Row)`
  @media (max-width: 480px) {
    flex-direction: column;
    margin-left: 20px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
