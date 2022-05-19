import React, { useMemo } from 'react';
import App, { AppProps, AppContext } from 'next/app';
import Head from 'next/head';

/** recoil */
import { RecoilRoot } from 'recoil';

/** react-query */
import { QueryClient, QueryClientProvider } from 'react-query';

/** styles */
import { globalStyles } from '~/styles/globals';
import { ThemeProvider } from '@emotion/react';
import theme from '~/styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 60 * 60 * 1000 * 24,
    },
  },
});

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../../__mocks__');
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const renderMeta = useMemo(() => {
    if (!pageProps.meta) return;
    const { title, description, image, url } = pageProps.meta;

    return (
      <>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </>
    );
  }, [pageProps]);

  return (
    <React.Fragment>
      <Head>
        <title>{pageProps.title}</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, maximum-scale=1"
        />
        {renderMeta}
      </Head>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            {globalStyles}
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </React.Fragment>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  return {
    ...appProps,
  };
};

export default MyApp;
