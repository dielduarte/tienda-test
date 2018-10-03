import styled from 'styled-components';
import { string, bool, oneOf, func } from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Small } from '../Text';
import { getBgColor, getColorByType } from './utils';

const Container = styled.button`
  border: 1px solid;
  border-radius: 3px;
  padding: 10px;
  ${props =>
    props.hasIcon &&
    'display: flex; align-items: center; justify-content: center;'}
  background: ${props => getBgColor(props)};
  color: ${props =>
    props.bordered ? getColorByType(props) : props.theme.white};
  text-transform: ${props => (props.uppercase ? 'uppercase' : 'none')};
  border-color: ${props =>
    props.bordered ? getColorByType(props) : 'transparent'};
  width: ${props => (props.full ? '100%' : 'auto')}

  &:nth-child(2) { 
    margin-left: 20px;
  }
`;

const Text = styled(Small)`
  flex: 2;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 12px;
  ${props => props.hasIcon && 'margin-right: 10px;'};
`;

const Icon = styled(FontAwesomeIcon)`
  color: ${props => getColorByType(props)};
`;

function Button({ bordered, iconName, title, type, uppercase, full, onClick }) {
  const hasIcon = iconName !== '';

  return (
    <Container
      bordered={bordered}
      full={full}
      hasIcon={hasIcon}
      onClick={onClick}
      type={type}
      uppercase={uppercase}
    >
      <Text hasIcon={hasIcon} type={type}>
        {title}
      </Text>
      {hasIcon && <Icon icon={iconName} type={type} />}
    </Container>
  );
}

Button.propTypes = {
  bordered: bool,
  full: bool,
  iconName: string,
  onClick: func.isRequired,
  title: string.isRequired,
  type: oneOf(['primary', 'secondary']),
  uppercase: bool
};

Button.defaultProps = {
  bordered: false,
  full: false,
  iconName: '',
  type: 'primary',
  uppercase: true
};

export default Button;
