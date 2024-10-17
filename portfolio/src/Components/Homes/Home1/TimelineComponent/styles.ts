import { styled } from "styled-components";
import { theme } from "../../../../themes/contants.ts";

export const CardContainer = styled.div`
  border-color: ${theme.colors.orange};
  border: 1px solid;
  border-radius: 20px;
  width: 200px;
  z-index: 1;
  background-color: ${theme.colors.grey};
  opacity: 0.8;
  justify-content: center;
  display: flex;
  flex-direction: column;
  padding: 16px;
  /* color: ${theme.colors.orange}; */
  margin: 4px;

  li {
    color: ${theme.colors.white};
  }
`;

export const CardTitle = styled.div`
  color: ${theme.colors.white};
  font-size: 16px;
  margin: 4px;
  text-align: center;
`;

export const CardSubTitle = styled.div`
  color: ${theme.colors.white};
  font-size: 16px;
  margin: 4px;
  text-align: center;
`;

export const CardTextUl = styled.ul``;
export const CardText = styled.li`
  color: ${theme.colors.white};
  font-size: 12px;
  margin: 4px;
  text-align: left;
`;

export const CardLocation = styled.div`
  color: ${theme.colors.white};
  font-size: 12px;
`;
