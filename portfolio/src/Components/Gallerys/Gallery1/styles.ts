import { styled } from "styled-components";
import { theme } from "../../../themes/contants.ts";

export const GalleryContainer = styled.div`
  width: 100vw;
  height: 100%;
  /* margin: 16px; */
  box-sizing: border-box;
`;

export const ImageContainer = styled.div`
  pointer-events: none;
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
  color: ${theme.colors.aqua};
  font-size: 48px;
  text-align: center;
  padding-top: 20px;
  width: 40vw;
  align-items: center;
  font-weight: 700;
`;

export const GalleryHeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;

export const GalleryHeaderImageContainer = styled.div`
  width: 450px;
  height: 80vh;
  @media (max-width: 1000px) {
    flex-direction: column;
    height: 15vh; /* Change direction to vertical */
  }
`;

export const GallerySubHeader = styled.h2`
  color: ${theme.colors.gold};
  font-size: 24px;
  text-align: left;
  padding-top: 20px;
  width: 450px;
`;
