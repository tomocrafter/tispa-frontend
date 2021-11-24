import type { NextPage } from 'next';
import React from 'react';

declare module 'next' {
  export declare type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
    getLayout: (_component: React.ReactElement) => React.ReactNode;
  };
}
