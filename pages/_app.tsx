import Script from "next/script";
import { NextPage } from "next/types";
import type { AppProps } from "next/app";
import DefaultSeo from "@/components/DefaultSeo";
import { ThemeProvider } from "next-themes";

import "@/styles/theme.css";
import "@/styles/globals.scss";

type GetLayout = (page: React.ReactElement) => React.ReactNode;

type NextPageWithLayout = NextPage & {
  getLayout?: GetLayout;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <DefaultSeo />
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "4d5fce9b2e5d487a9ff345ae78909049"}'
      />
      <ThemeProvider attribute="data-theme">
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
