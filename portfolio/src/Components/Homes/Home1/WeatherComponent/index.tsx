import React from "react";
import { WeatherData } from "../useData.ts";
import {
  GreyText,
  LatLonContainer,
  WeatherDescContainer,
  WeatherIconContainer,
  WeatherTempContainer,
  WeatherTempSymbolContainer,
} from "./styles.ts";
import {
  CloudDrizzle,
  CloudHail,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  CloudSun,
  CloudSunRain,
  Cloudy,
  Haze,
  Snowflake,
  Sun,
  Wind,
} from "lucide-react";
import { getWeatherDescription } from "../utils.ts";

/**
 * A component that displays the weather information for a given location.
 *
 * @param {WeatherData} props The weather data object
 * @returns {JSX.Element} The weather component
 * @example
 * <WeatherComponent
 *   latitude="12.9716"
 *   longitude="77.5946"
 *   timezone="Asia/Kolkata"
 *   weatherCode={0}
 *   temperature={23}
 *   precipitation={0}
 *   wind_speed_10m={5}
 * />
 */
const WeatherComponent: React.FC<WeatherData> = (props) => {
  const getWeatherIcon = (code: number) => {
    if (code === 0) return <Sun size={24} />;
    if ([1, 2, 3].includes(code)) return <CloudSun size={24} />;
    if ([45, 24].includes(code)) return <Haze size={24} />;
    if ([51, 53, 55].includes(code)) return <CloudSunRain size={24} />;
    if ([56, 57].includes(code)) return <CloudDrizzle size={24} />;
    if ([61, 63, 65].includes(code)) return <CloudRain size={24} />;
    if ([66, 67].includes(code)) return <CloudRainWind size={24} />;
    if ([71, 73, 75].includes(code)) return <Snowflake size={24} />;
    if (code === 77) return <CloudSunRain size={24} />;
    if ([80, 81, 82].includes(code)) return <CloudRainWind size={24} />;
    if ([85, 86].includes(code)) return <CloudSnow size={24} />;
    if (code === 95) return <CloudRainWind size={24} />;
    if ([96, 99].includes(code)) return <CloudHail size={24} />;
    <Wind size={24} />;
    // Default icon if no match found
    return <CloudDrizzle size={24} />;
  };
  return (
    <>
      <WeatherTempSymbolContainer>My Cordinates</WeatherTempSymbolContainer>
      <LatLonContainer className="text-left text-xs">{`Longitude: ${props.longitude}`}</LatLonContainer>
      <LatLonContainer className="text-left text-xs">{`Latitude: ${props.latitude}`}</LatLonContainer>
      <div className="text-left text-sm">Bengaluru, Karnataka, IN</div>
      <WeatherDescContainer className="text-left">
        {"(FYI: This is my location)"}
      </WeatherDescContainer>
      <WeatherTempContainer className="text-left">{`${props.temperature}°`}</WeatherTempContainer>
      <WeatherTempSymbolContainer className="text-left">
        {`C`}
        <GreyText>{"/F"}</GreyText>
      </WeatherTempSymbolContainer>
      <div className="grid grid-cols-2 gap-2">
        <div className="col-span-1">
          <WeatherIconContainer className="p-2">
            <Wind size={24} />
          </WeatherIconContainer>
          <div className="text-left text-xs">{`Wind: ${props.wind_speed_10m}`}</div>
        </div>
        <div className="col-span-1">
          <WeatherIconContainer className="p-2">
            {getWeatherIcon(props.weatherCode)}
          </WeatherIconContainer>
          <div className="text-left text-xs">
            {getWeatherDescription(props.weatherCode)}
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherComponent;
