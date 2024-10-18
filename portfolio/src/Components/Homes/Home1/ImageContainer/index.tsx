import { RoundImage, StaticImageContainer } from "./styles.ts";

/**
 * A component that renders a rounded image of Saiteja.
 *
 * @return {React.ReactElement} A React element representing the component.
 */

const ImagerContainer = () => {
  return (
    <StaticImageContainer>
      <RoundImage src="images/saiteja.png" alt="saiteja" />
    </StaticImageContainer>

    // </StaticImageContainer>
  );
};

export default ImagerContainer;
