import type { AppProps } from "next/app";
import Head from "next/head";
import Navbar from "@components/atoms/Navbar";
import { createGlobalStyle } from "styled-components";
import NextImage from "next/image";
import styled from "styled-components";
import { useState } from "react";
import profileImg from "../public/profile-img.webp";

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  height: 30vh;
  max-height: 30vw;
  min-height: 11rem;
`;

const Image = styled(NextImage)`
  max-width: 100% !important;
  width: unset !important;
  min-width: unset !important;
  user-drag: none;
  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

const GlobalStyle = createGlobalStyle`
  :root {
    @media (prefers-color-scheme: dark) {
      --backgroundColor: #28313b;
      --fontColor: #00ff00;
      --lineColor: #9e9e9e;
      --boxShadowColor: #7c7c7cde;
    }
    
    @media (prefers-color-scheme: light) {
      --backgroundColor: #48b1bf;
      --fontColor: #080808;
      --lineColor: #00ff00;
      --boxShadowColor: #00000070;
    }
  }

  html {
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape */
  }

  body {
    font-family: monospace;
    min-height: 100vh;
    margin: 0px;
    color: var(--fontColor);

    @media (prefers-color-scheme: dark) {
      background-color: var(--backgroundColor);
    }
    
    @media (prefers-color-scheme: light) {
      background: linear-gradient(90deg, var(--backgroundColor), #6be194d1 );
      background-size: 400% 400%;
      animation: gradient 15s ease infinite;
      @keyframes gradient {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }
    }
    
  }
`;

const Main = styled.main`
  margin: 2rem 2rem 0rem 2rem;
`;

const ImageShapeBackground = styled.div`
  width: 30%;
  max-width: 30vh;
  min-width: 13rem;
  border-radius: 75% 25% 84% 16% / 85% 51% 49% 15%;
  height: 100%;

  @media (prefers-color-scheme: dark) {
    --imageBackgroundColor: var(--fontColor);
  }

  @media (prefers-color-scheme: light) {
    --imageBackgroundColor: #152b2e;
  }

  background: linear-gradient(to right, var(--imageBackgroundColor), #9e9e9ebd);
`;

const ImageWithGradient = () => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>();
  return (
    <ImageContainer>
      {isImageLoaded && <ImageShapeBackground />}
      <Image
        src={profileImg}
        alt="Profile image"
        placeholder="blur"
        blurDataURL={`data:image/svg+xml;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPk5uV9CwABZAEUcnMSRQAAAABJRU5ErkJggg==`}
        layout="fill"
        objectFit="contain"
        priority
        onLoadingComplete={() => {
          setIsImageLoaded(true);
        }}
      />
    </ImageContainer>
  );
};

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
          content="#48b1bf"
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
        <ImageWithGradient />
        <Component {...pageProps} />
      </Main>
    </>
  );
}

export default MyApp;
