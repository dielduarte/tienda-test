import React from 'react';
import { ThemeProvider, injectGlobal } from 'styled-components';

injectGlobal`
  * { 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', Helvetica,sans-serif;
  }
`;

const theme = {
  white: '#FFF',
  darkGray: '#333',
  gray: '#b5b5b5',
  lightGray: '#f5f5f5',
  lightBlue: '#68bcce',
  red: 'red'
};

function WithTheme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default WithTheme;
