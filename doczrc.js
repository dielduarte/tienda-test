import { css } from 'docz-plugin-css';

export default {
  title: 'Tienda Nube',
  wrapper: 'utils/withTheme.js',
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: true
    })
  ]
};
