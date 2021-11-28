import * as React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import theme from '../src/theme';
import { FlashlessScript } from 'chakra-ui-flashless';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head />
        <body>
          <FlashlessScript theme={theme} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
