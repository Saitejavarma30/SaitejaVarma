import React, { useEffect, useState } from "react";
import {
  AboutContent,
  AboutContentContainer,
  GreetingContainer,
  Greetingtext,
  HeroContainer,
  HeroContentContainer,
  Heroheader,
  HeroHeaderContainer,
  HeroHeaderText,
  HeroLangugageContainer,
  HeroLocationContainer,
  JustAnotherContainer,
  SplineContainer,
  StaticImageContainer,
} from "./styles.ts";
import { MoonStar, Sun, Sunrise, Sunset } from "lucide-react";
import moment from "moment";
import useData from "./useData.ts";
import LanguageComponent from "./LanguageComponent/index.tsx";
import WeatherComponent from "./WeatherComponent/index.tsx";
import { getGreeting } from "./utils.ts";
import BoxesHover from "../../../SplineComponents/BoxesHover.tsx";
import ImagerContainer from "./ImageContainer/index.tsx";
import CustomizedTimeline from "./TimelineComponent/index.tsx";

export const StaticImage = () => {
  return <StaticImageContainer src="images/Saiteja-avatar.png" />;
};

const Hero = ({ className }: { className?: string }) => {
  const currentMonthIndex = moment().month();
  const currentMonthName = moment().format("MMMM"); // Full month name (e.g., 'August')
  const currentMonthShortName = moment().format("MMM"); // Short month name (e.g., 'Aug')
  const { data, loading, error } = useData();

  // Get the current date of the month
  const currentDate = moment().date();

  const getGreetingIcon = () => {
    const hour = moment().hour();

    if (hour < 7) {
      return <Sunrise />;
    } else if (hour < 17) {
      return <Sun />;
    } else if (hour < 19) {
      return <Sunset />;
    } else {
      return <MoonStar />;
    }
  };
  return (
    <HeroContainer className={`${className} container m-6 p-6`}>
      <GreetingContainer>
        {getGreetingIcon()}
        <Greetingtext className="px-2">{getGreeting()}</Greetingtext>
      </GreetingContainer>
      <HeroHeaderContainer>
        <Heroheader className="text-4xl text-left p-6 col-span-4">
          <div className="text-left text-xl">Hi, I'm</div>
          Saiteja Varma, <HeroHeaderText>
            Full-stack developer
          </HeroHeaderText>{" "}
          by profession with passion for{" "}
          <HeroHeaderText>Photography</HeroHeaderText>.
        </Heroheader>

        <SplineContainer>
          <ImagerContainer />
        </SplineContainer>
      </HeroHeaderContainer>
      <Heroheader className="text-4xl text-left p-6 col-span-4">
        <HeroHeaderText>About Me</HeroHeaderText>
      </Heroheader>
      <JustAnotherContainer>
        <AboutContentContainer>
          <AboutContent>
            I’m a seasoned software engineer with over 3 years of experience in
            full-stack web development, navigating the digital realms at
            esteemed organizations like United Health Group (UHG) Optum and
            Flipkart.
          </AboutContent>
          <AboutContent>
            When I’m not wrestling with code, you can find me with a camera in
            hand, capturing the world one snapshot at a time. Traveling is my
            escape, whether it’s hiking up a mountain or exploring a bustling
            city. Each journey fuels my creativity, both as a developer and a
            photographer.
          </AboutContent>
          <AboutContent>
            So, if you’re looking for someone who can both build robust
            applications and take stunning pictures of your cat, you’ve come to
            the right place!
          </AboutContent>
        </AboutContentContainer>
        <HeroContentContainer>
          <HeroLangugageContainer>
            <LanguageComponent />
          </HeroLangugageContainer>
          <HeroLocationContainer>
            {data && !loading ? (
              <WeatherComponent {...data} />
            ) : (
              <WeatherComponent
                {...{
                  latitude: "12.97°E",
                  longitude: "77.5946°N",
                  timezone: "Asia/Kolkata",
                  weatherCode: 0,
                  temperature: "24°C",
                  precipitation: "2mm",
                  wind_speed_10m: "2km/h",
                }}
              />
            )}
          </HeroLocationContainer>
        </HeroContentContainer>
      </JustAnotherContainer>
    </HeroContainer>
  );
};

export default Hero;
