export type GeoCoord = {
  lon: number; // Longitude of the location
  lat: number; // Latitude of the location
};

export type Weather = {
  id: number | string; // Weather condition id
  main: string; // Group of weather parameters (Rain, Snow, Clouds etc.)
  // Weather condition within the group.
  // Please find more here. You can get the output in your language. Learn more
  description: string;
  icon: string; // Weather icon id
};

export type DetailWeather = {
  temp: number; // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
  // Temperature.
  // This temperature parameter accounts for the human perception of weather.
  // Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
  'feels_like': number;
  pressure: number; // Atmospheric pressure on the sea level, hPa
  humidity: number; // Humidity, %
  // Minimum temperature at the moment.
  // This is minimal currently observed temperature (within large megalopolises and urban areas).
  // Please find more info here. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
  'temp_min': number;
  // Maximum temperature at the moment.
  // This is maximal currently observed temperature (within large megalopolises and urban areas).
  // Please find more info here. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit
  'temp_max': number;
  'sea_level': number; // Atmospheric pressure on the sea level, hPa
  'grnd_level': number; // Atmospheric pressure on the ground level, hPa
};

export type Wind = {
  speed: number; // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
  deg: number; // Wind direction, degrees (meteorological)
  gust: number; // Wind gust. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour
};

export type Clouds = {
  all: number;
};

export type Rain = {
  '1h'?: number; // (where available) Rain volume for the last 1 hour, mm. Please note that only mm as units of measurement are available for this parameter
  '3h'?: number; // (where available) Rain volume for the last 3 hours, mm. Please note that only mm as units of measurement are available for this parameter
};

export type Snow = {
  '1h': number; // (where available) Snow volume for the last 1 hour, mm. Please note that only mm as units of measurement are available for this parameter
  '3h': number; // (where available)Snow volume for the last 3 hours, mm. Please note that only mm as units of measurement are available for this parameter
};

export type Sys = {
  type: number; // Internal parameter
  id: number; // Internal parameter
  message?: string; // Internal parameter
  country: string; // Country code (GB, JP etc.)
  sunrise: number; // Sunrise time, unix, UTC
  sunset: number; // Sunset time, unix, UTC
}

export type WeatherResult = {
  coord: GeoCoord;
  weather: Weather[];
  base: string; // Internal parameter
  main: DetailWeather;
  visibility: number; // Visibility, meter. The maximum value of the visibility is 10 km
  wind: Wind;
  clouds?: Clouds;
  rain?: Rain;
  snow?: Snow;
  dt: number; // Time of data calculation, unix, UTC
  sys: Sys;
  timezone: number; // Shift in seconds from UTC
  // City ID. Please note that built-in geocoder functionality has been deprecated. Learn more here
  id: number | string;
  // City name.
  // Please note that built-in geocoder functionality has been deprecated.
  // Learn more here
  name: string;
  cod: number; // Internal parameter
};

export type WeatherError = {
  cod: number;
  message: string;
}

export type WeatherConverToCoordResult = {
  name: string; // Name of the found location
  'local_names': {
    // Name of the found location in different languages.
    // The list of names can be different for different locations
    [languageCode: string]: string;
    ascii: string; // Internal field
    'feature_name': string; // Internal field
  };
  lat: number; // Geographical coordinates of the found location (latitude)
  lon: number; // Geographical coordinates of the found location (longitude)
  country: string; // Country of the found location
  state?: string; // (where available) State of the found location
}
