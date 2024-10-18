import SpaceBackground from "../../../SplineComponents/SpaceBackground.tsx";
import Gallery1 from "../../Gallerys/Gallery1/index.tsx";
import Hero from "./hero.tsx";
import { HeroHomeContainer, SpaceContainer } from "./styles.ts";

/**
 * Home1 component
 *
 * This component serves as the main container for the home page content.
 * It includes a space-themed background and a hero section.
 * The SpaceBackground component is used to render the space background,
 * while the Hero component displays the hero content.
 *
 * @returns {React.ReactElement} A React element representing the home page.
 */
const Home1 = () => {
  return (
    <>
      <SpaceContainer>
        <SpaceBackground />
      </SpaceContainer>
      <HeroHomeContainer>
        <Gallery1 />
      </HeroHomeContainer>
    </>
  );
};

export default Home1;
