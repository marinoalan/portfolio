import { useState } from "react";
import NextImage from "next/image";
import styled from "styled-components";
import profileImg from "../../../public/profile-img.webp";

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: min(14rem, 100%);
  height: min(12rem, 65vw);
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

  ${({ lightBackgroundColor }: { lightBackgroundColor?: string }) =>
    lightBackgroundColor &&
    `
    @media (prefers-color-scheme: light) {
      background-color: ${lightBackgroundColor};
    }`}
`;

const ImageShapeBackground = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
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

const ImageProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const ImageProfile = styled.div`
  position: relative;
  width: 90%;
  height: 90%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-basis: 20rem;
  flex-grow: 1;
`;

const AboutMeProfileImage = () => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>();
  return (
    <ImageWrapper>
      <ImageContainer>
        {isImageLoaded && <ImageShapeBackground />}
        <ImageProfileContainer>
          <ImageProfile>
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
          </ImageProfile>
        </ImageProfileContainer>
      </ImageContainer>
    </ImageWrapper>
  );
};

export default AboutMeProfileImage;
