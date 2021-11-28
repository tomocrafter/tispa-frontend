import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ChakraProvider } from '@chakra-ui/react';
import { NextPageWithLayout } from 'next';

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
        <ChakraProvider>{getLayout(<Component {...pageProps} />)}</ChakraProvider>
      </RecoilRoot>
    </>
  );
}
