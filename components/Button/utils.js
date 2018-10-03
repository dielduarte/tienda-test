export const getColorByType = props => {
  const { type, theme } = props;

  const bgPerType = {
    primary: theme.lightBlue,
    secondary: theme.gray,
    default: theme.lightBlue
  };

  return bgPerType[type] || bgPerType['default'];
};

export const getBgColor = props => {
  const { bordered } = props;

  if (bordered) return 'transparent';

  return getColorByType(props);
};
