import { styled } from "styled-components";
import { theme } from "../../../themes/contants.ts";

export const HeroContainer = styled.div`
  height: 100%;
  color: ${theme.colors.cream};
  position: relative;
  scrollbar-width: none;
  overflow-x: hidden;
  box-sizing: border-box;
  width: auto;
`;

export const GreetingContainer = styled.div`
  color: ${theme.colors.cream};
  display: flex;
`;

export const HeroHeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 90vh;
  overflow-x: hidden;
  @media (max-width: 558px) {
    flex-direction: column;
  }

  & > div {
    width: 100%;
  }

  & > div:first-child {
    order: 2;
  }
  & > div:last-child {
    order: 1;
  }
`;
export const Heroheader = styled.h1`
  font-optical-sizing: auto;
  flex: 1;
  font-weight: 400;
  font-size: 48px;
  font-style: normal;
  color: ${theme.colors.cream};
`;
export const SplineContainer = styled.div`
  flex: 1;
`;

export const HeroHeaderText = styled.span`
  color: ${theme.colors.gold};
`;

export const Greetingtext = styled.div``;
export const HeroContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
  height: 90%;
`;

export const HeroLocationContainer = styled.div`
  border-color: ${theme.colors.grey};
  /* border: 1px solid; */
  border-radius: 20px;
  /* height: 280px; */
  width: 300px;
  z-index: 1;
  background-color: ${theme.colors.grey};
  opacity: 0.8;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 16px;
  color: ${theme.colors.white};
  margin: 4px;

  li {
    color: ${theme.colors.white};
  }
`;

export const HeroLangugageContainer = styled.div`
  border-color: ${theme.colors.grey};
  /* border: 1px solid; */
  border-radius: 20px;
  height: 260px;
  width: 300px;
  z-index: 1;
  background-color: ${theme.colors.grey};
  opacity: 0.8;
  display: flex;
  flex-direction: column;
  padding: 16px;
  color: ${theme.colors.white};
  margin: 4px;

  li {
    color: ${theme.colors.white};
  }
  pointer-events: all;
`;

export const StaticImageContainer = styled.img`
  width: 100%;
  z-index: 10;
  position: relative;
`;

// For the space hero component be mounted on the space component

export const SpaceContainer = styled.div`
  position: fixed; /* or relative, depending on the layout */
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1; /* Lower z-index so it appears behind */
`;

export const HeroHomeContainer = styled.div`
  position: relative; /* Or absolute if needed */
  z-index: 2; /* Higher z-index to appear above */
  pointer-events: all;
`;

export const JustAnotherContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 90%;
  color: ${theme.colors.cream};
  @media (max-width: 558px) {
    flex-direction: column;
  }

  & > div {
    width: 100%;
  }

  & > div:first-child {
    order: 2;
  }
  & > div:last-child {
    order: 1;
  }
`;

export const AboutContentContainer = styled.div`
  font-size: 24px;
`;

export const AboutContent = styled.div`
  color: ${theme.colors.cream};
  text-align: left;
  padding: 12px;
  max-width: 500px;
`;
