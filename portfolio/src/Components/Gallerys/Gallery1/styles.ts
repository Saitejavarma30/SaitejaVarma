import { styled } from "styled-components";
import { theme } from "../../../themes/contants.ts";
import TornpaperImage from "./TornImage.tsx";

export const GalleryContainer = styled.div`
  width: 95vw;
  height: 100%;
  /* margin: 16px; */
  box-sizing: border-box;
`;

export const ImageContainer = styled.div`
  pointer-events: none;
  width: 300px;
  @media (max-width: 1060px) {
    width: 220px;
  }
  @media (max-width: 560px) {
    width: 120px;
  }
`;
export const GalleryHeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 90%;
  width: 100%;
  color: ${theme.colors.cream};
  @media (max-width: 1000px) {
    flex-direction: column;
    & > div:first-child {
      order: 2; /* Move first child to the bottom */
    }

    & > div:nth-child(2) {
      order: 1; /* Move second child to the top */
    }
  }
`;
export const GalleryHeader = styled.h1`
  color: ${theme.colors.orange};
  font-size: 48px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 40vw;
  align-items: center;
  font-weight: 700;
  @media (max-width: 1000px) {
    font-size: 32px;
    width: 90vw;
  }
`;

export const GalleryHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const GalleryHeaderImageContainer = styled.div`
  width: 50vw;
  height: 80vh;
  position: relative;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
    width: 90vw;
  }

  & > div:first-child {
    pointer-events: all;
    cursor: grab;
    position: absolute;
    top: 10%;
    right: 0%;

    @media (max-width: 1000px) {
      position: relative;
      right: 0%;
      top: 25%;
    }
  }

  & > div:nth-child(2) {
    pointer-events: all;
    cursor: grab;
    position: absolute;
    top: 30%;
    right: 18%;

    @media (max-width: 1000px) {
      position: relative;
      right: 0%;
      top: 25%;
    }
  }

  & > div:nth-child(3) {
    pointer-events: all;
    cursor: grab;
    position: absolute;
    top: 55%;
    right: 0%;

    @media (max-width: 1000px) {
      position: relative;
      right: 0%;
      top: 45%;
    }
  }
`;

export const GallerySubHeader = styled.h2`
  color: ${theme.colors.gold};
  font-size: 24px;
  text-align: left;
  padding-top: 20px;
  width: 40vw;
  @media (max-width: 1000px) {
    font-size: 16px;
    width: 90vw;
  }
`;

export const ImageGalleryContainer = styled.div`
  display: relative;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100dvh;
  width: 95dvw;
  color: ${theme.colors.cream};
  /* box-shadow: -0.1rem -0.1rem 0.3rem 0.02rem rgba(0, 0, 0, 0.5) inset;
  filter: drop-shadow(0.3rem 0.15rem 0.2rem rgba(0, 0, 0, 0.5)); */

  @media (max-width: 1000px) {
    flex-direction: column;
    & > div:first-child {
      order: 2; /* Move first child to the bottom */
    }

    & > div:nth-child(2) {
      order: 1; /* Move second child to the top */
    }
  }
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 90%;
  width: 100%;
  color: ${theme.colors.cream};
  @media (max-width: 1000px) {
    flex-direction: column;
    & > div:first-child {
      order: 2; /* Move first child to the bottom */
    }

    & > div:nth-child(2) {
      order: 1; /* Move second child to the top */
    }
  }
`;

export const TornPaperLocationPin = styled.div`
  position: relative;
  padding: 0.5rem;
  background-color: white;
  z-index: 10;

  ::after {
    position: absolute;
    content: "";
    top: 0.5rem;
    right: 50%;
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    box-shadow: -0.1rem -0.1rem 0.3rem 0.02rem rgba(0, 0, 0, 0.5) inset;
    filter: drop-shadow(0.3rem 0.15rem 0.2rem rgba(0, 0, 0, 0.5));
    /* transform: translateZ(0); */
    background: ${theme.colors.orange};
  }
`;

export const TornPaperLocationText = styled.div`
  color: ${theme.colors.black};
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 560px) {
    font-size: 12px;
  }
`;

export const TornPaperLocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
`;

export const StaticConainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100dvh;
  width: 80dvw;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 20;
  /* border-color: ${theme.colors.grey}; */
  /* border: 1px solid; */
  border-radius: 20px;
  z-index: 25;
  /* background-color: ${theme.colors.grey}; */
  /* opacity: 0.4; */
`;
