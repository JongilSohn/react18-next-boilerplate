import React, { FunctionComponent, ReactNode } from 'react';
import Head from 'next/head';

/** styles */
import styled from '@emotion/styled';

/** components */
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import Nav from '~/components/Nav';

interface IDefaultLayoutProps {
  children?: ReactNode;
  title?: string;
}

const DefaultLayout: FunctionComponent<IDefaultLayoutProps> = ({ children, title = '과제' }) => {
  return (
    <DefaultLayoutWrapper>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, maximum-scale=1"
        />
      </Head>
      <Layout>
        <Header />
        <Nav />
        <Content>{children}</Content>
        <Footer />
      </Layout>
    </DefaultLayoutWrapper>
  );
};

const DefaultLayoutWrapper = styled.div`
  margin: 0 auto;
  overflow-x: hidden;
`;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1440px;
  margin: 0 auto;
`;

const Content = styled.section`
  display: flex;
  flex: auto;
  height: 100%;
`;

export default DefaultLayout;
