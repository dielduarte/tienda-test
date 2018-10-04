import App, { Container } from 'next/app';
import React from 'react';

import WithTheme from '../utils/WithTheme';
import WithStore from '../utils/WithStore';

import '../config/fontAwesome';

class TiendaNubeApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <WithStore>
          <WithTheme>
            <Component {...pageProps} />
          </WithTheme>
        </WithStore>
      </Container>
    );
  }
}

export default TiendaNubeApp;
