import moment from "moment";

/**
 * Function to get the appropriate greeting based on the current hour of the day.
 * Returns "Good morning" before 12:00, "Good afternoon" before 18:00, and "Good evening" otherwise.
 */
export const getGreeting = (): string => {
  const hour = moment().hour();

  if (hour < 12) {
    return "Good morning";
  } else if (hour < 18) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
};

/**
 * Given a weather code, returns a human-readable description of the weather.
 * Returns the following descriptions for the given codes:
 * 0: Clear sky
 * 1: Mainly clear
 * 2: Partly cloudy
 * 3: Overcast
 * 45: Fog
 * 48: Depositing rime fog
 * 51: Drizzle
 * 53: Drizzle
 * 55: Drizzle
 * 56: Freezing Drizzle
 * 57: Freezing Drizzle
 * 61: Rain
 * 63: Moderate Rain
 * 65: Heavy Rain
 * 66: Freezing Rain
 * 67: Freezing Rain
 * 71: Snow fall
 * 73: Moderate Snow fall
 * 75: Heavy Snow fall
 * 77: Snow grains
 * 80: Rain showers
 * 81: Moderate Rains
 * 82: Heavy Raine
 * 85: Moderate Snow fall
 * 86: Heavy Snow fall
 * 95: Thunderstorms
 * 96: Thunderstorms
 * 99: Thunderstorms
 * All other codes: Drizzle
 */
export const getWeatherDescription = (code: number): string => {
  switch (code) {
    case 0:
      return "Clear sky";
    case 1:
      return "Mainly clear";
    case 2:
      return "Partly cloudy";
    case 3:
      return "Overcast";
    case 45:
      return "Fog";
    case 48:
      return "Depositing rime fog";
    case 51:
      return "Drizzle";
    case 53:
      return "Drizzle";
    case 55:
      return "Drizzle";
    case 56:
      return "Freezing Drizzle";
    case 57:
      return "Freezing Drizzle";
    case 61:
      return "Rain";
    case 63:
      return "Moderate Rain";
    case 65:
      return "Heavy Rain";
    case 66:
      return "Freezing Rain";
    case 67:
      return "Freezing Rain";
    case 71:
      return "Snow fall";
    case 73:
      return "Moderate Snow fall";
    case 75:
      return "Heavy Snow fall";
    case 77:
      return "Snow grains";
    case 80:
      return "Rain showers";
    case 81:
      return "Moderate Rains";
    case 82:
      return "Heavy Raine";
    case 85:
      return "Moderate Snow fall";
    case 86:
      return "Heavy Snow fall";
    case 95:
      return "Thunderstorms";
    case 96:
      return "Thunderstorms";
    case 99:
      return "Thunderstorms";
    default:
      return "Drizzle";
  }
};
