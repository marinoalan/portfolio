import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@components/atoms/Navbar";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    @media (prefers-color-scheme: dark) {
      --backgroundColor: #28313b;
      --fontColor: #00ff00;
      --lineColor: #9e9e9e;
      --boxShadowColor: #7c7c7cde;
    }
    
    @media (prefers-color-scheme: light) {
      --backgroundColor: #7addac;
      --fontColor: #2a2a2a;
      --lineColor: #ff726d;
      --boxShadowColor: #00000070;
    }
  }

  html {
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape */
    // scroll-behavior: smooth;
  }

  body {
    font-family: monospace;
    min-height: 100vh;
    margin: 0px;
    color: var(--fontColor);
    background-color: var(--backgroundColor);
    padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
  }
`;

const Main = styled.main`
  margin: 0 2rem;
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Alan Marino Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="theme-color"
          content="#7addac"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#28313b"
          media="(prefers-color-scheme: dark)"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Navbar />
      <Main>
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;
