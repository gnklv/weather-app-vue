export interface Weather {
  /** Weather condition id */
  id: number;
  /** Group of weather parameters (Rain, Snow, Extreme etc.) */
  main: string;
  /** Weather condition within the group. You can get the output in your language */
  description: string;
  /** Weather icon id */
  icon: string;
}

export interface Main {
  /** Temperature. */
  temp: number;
  /** Temperature. This temperature parameter accounts for the human perception of weather. */
  feels_like: number;
  /** Minimum temperature at the moment.
   * This is minimal currently observed temperature (within large megalopolises and urban areas) */
  temp_min: number;
  /** Maximum temperature at the moment.
   * This is maximal currently observed temperature (within large megalopolises and urban areas) */
  temp_max: number;
  /** Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa */
  pressure: number;
  /** Humidity, % */
  humidity: number;
  /** Atmospheric pressure on the sea level, hPa */
  sea_level: number;
  /** Atmospheric pressure on the ground level, hPa */
  grnd_level: number;
}

/** Visibility */
export type Visibility = number;

export interface Wind {
  /** Wind speed. */
  speed: number;
  /** Wind direction, degrees (meteorological) */
  deg: number;
}

export interface Clouds {
  /** Cloudiness, % */
  all: number;
}

/** Time of data calculation, unix, UTC */
export type Dt = number;

/** Shift in seconds from UTC */
export type Timezone = number;

/** City name */
export type Name = string;

export interface OpenWeather {
  weather: Weather[];
  main: Main;
  visibility: Visibility;
  wind: Wind;
  clouds: Clouds;
  dt: Dt;
  timezone: Timezone;
  name: Name;
}
