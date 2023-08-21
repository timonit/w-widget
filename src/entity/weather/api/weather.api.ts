import { API } from '@/shared';
import type { WeatherConverToCoordResult, WeatherResult } from '../types';
import { CONVERT_TO_GEOCOORD_PATH, GET_WEATHER_PATH, WEATHER_API_URL } from './constans';
import { weatherAPIRequest } from './weather-api-request.decor';

export default class WeatherAPI extends API {
  baseAPI = WEATHER_API_URL;

  API_ID: string;

  constructor(API_ID: string) {
    super();
    this.API_ID = API_ID;
  }

  /**
   * Запрашивает погоду по координатам
   * @throws {AxiosError}
   */
  @weatherAPIRequest
  async getWeatherByCoord(lat: string | number, lon: string | number): Promise<WeatherResult> {
    const result = await this.get<WeatherResult>({
      url: GET_WEATHER_PATH,
      params: {
        lat,
        lon,
        appid: this.API_ID,
        lang: 'ru',
        units: 'metric',
      },
    });

    return result.data;
  }

  /**
   * Конвертация названия города, штата(только для США), страны в координаты
   */
  @weatherAPIRequest
  async convertToCoord(name: string): Promise<WeatherConverToCoordResult[]> {
    const result = await this.get<WeatherConverToCoordResult[]>({
      url: CONVERT_TO_GEOCOORD_PATH,
      params: {
        q: name,
        appid: this.API_ID,
      },
    });

    return result.data;
  }
}
export { WeatherAPI };
