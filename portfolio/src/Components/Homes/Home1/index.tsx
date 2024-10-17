import SpaceBackground from "../../../SplineComponents/SpaceBackground.tsx";
import Hero from "./hero.tsx";
import { HeroHomeContainer, SpaceContainer } from "./styles.ts";

const Home1 = () => {
  return (
    <>
      <SpaceContainer>
        <SpaceBackground />
      </SpaceContainer>
      <HeroHomeContainer>
        <Hero />
      </HeroHomeContainer>
    </>
  );
};

export default Home1;
