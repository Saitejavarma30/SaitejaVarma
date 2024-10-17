import { styled } from "styled-components";

export const StaticImageContainer = styled.div`
  border-radius: 50%; /* Make it a circle */
  background-color: rgba(8, 12, 28, 0.7); /* Set a background color */
  width: 400px;
  height: 400px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: top;
`;

export const RoundImage = styled.img`
  width: 90%; /* Slightly smaller than the container to give a border effect */
  height: 90%; /* Round the image itself */
  object-fit: cover; /* Ensure the image covers the circle without distortion */
  transform: translateX(20px) translateY(-30px);
`;
