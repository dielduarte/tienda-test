import styled from 'styled-components';
import { bool } from 'prop-types';

const Card = styled.div`
  background: ${props => props.theme.white};
  padding: 10px 20px;
  box-shadow: 0px 0px 1px 0px rgba(0, 0, 0, 0.25);
  border-radius: ${props => (props.bordered ? '3px' : 0)};
  margin-bottom: 20px;
  overflow-x: scroll;
`;

Card.propTypes = {
  bordered: bool
};

Card.defaultProps = {
  bordered: false
};

export default Card;
