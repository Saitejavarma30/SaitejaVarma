import { Heroheader, HeroHeaderContainer, HeroHeaderText } from "./styles.ts";

const Hero1 = () => {
  return (
    <HeroHeaderContainer className="grid grid-cols-4 gap-2">
      <Heroheader className="text-4xl text-left p-6 col-span-4">
        <div className="text-left text-xl">Hi, I'm</div>
        Saiteja Varma, <HeroHeaderText>Full-stack developer</HeroHeaderText> by
        profession with passion for <HeroHeaderText>Photography</HeroHeaderText>
        .
      </Heroheader>

      {/* <ImageContainer /> */}
    </HeroHeaderContainer>
  );
};

export default Hero1;
