// Represents a single location object returned from the geo API
export interface LocationData {
    name: string;
    lat: number;
    lon: number;
    state?: string;
    country?: string;
  }
  
  // Represents weather condition data
  export interface WeatherCondition {
    main: string;
    description: string;
    icon: string;
  }
  
  // Represents main temperature/pressure/humidity data
  export interface MainWeatherData {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  
  // Represents the current weather response
  export interface CurrentWeatherData {
    weather: WeatherCondition[];
    main: MainWeatherData;
    dt: number;
    name: string;
  }
  
  // Represents a single forecast entry
  export interface ForecastEntry {
    dt: number;
    main: MainWeatherData;
    weather: WeatherCondition[];
    dt_txt: string;
  }
  
  // Represents the full 5-day forecast response
  export interface ForecastData {
    list: ForecastEntry[];
    city: {
      name: string;
      country: string;
    };
  }
  