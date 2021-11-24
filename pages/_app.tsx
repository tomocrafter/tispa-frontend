import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { NextPageWithLayout } from 'next';
import { ThemeProvider } from '../src/theme';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp(props: AppPropsWithLayout) {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <title>Tispa!</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <RecoilRoot>
        <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
      </RecoilRoot>
    </>
  );
}
