import React, { ReactNode } from 'react';
import { MaxWidthLayout } from './Layout.styles';
import ToastManager from 'components/Toast/ToastManager';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0/client';

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex,nofollow" />
      </Head>
      <UserProvider>
        <MaxWidthLayout>{children}</MaxWidthLayout>
        <ToastManager />
      </UserProvider>
    </>
  );
};

export default Layout;
