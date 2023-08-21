import { expect, test, describe, beforeEach} from 'vitest'
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { WeatherAPI } from './weather.api';
import { CONVERT_TO_GEOCOORD_PATH, GET_WEATHER_PATH, WEATHER_API_URL } from './constans';
import { WeatherConverToCoordResultMock, weatherResultMock } from './mock';

describe('getWeatherByCoord', () => {
  const APP_ID = 'API_ID';
  const url = new URL(WEATHER_API_URL);
  const lat = 52;
  const lon = 42;
  const params = {
    lat,
    lon,
    appid: APP_ID,
    lang: 'ru',
    units: 'metric',
  };
  url.pathname = GET_WEATHER_PATH;
  url.search = new URLSearchParams(params as unknown as Record<string, string>).toString();
  let instance: WeatherAPI;
  let axiosMock: MockAdapter;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
    instance = new WeatherAPI(APP_ID);
  });

  test('success request', async () => {
    const handler = axiosMock.onGet(`${url.origin}${url.pathname}`).reply(200, weatherResultMock);

    const result = await instance.getWeatherByCoord(lat, lon);

    expect(result).toEqual(weatherResultMock);
    expect(handler.history.get[0].params).toEqual(params);
  });
});

describe('convertToCoord', () => {
  const APP_ID = 'appid';
  const city = 'London';
  const url = new URL(WEATHER_API_URL);
  const params = {
    q: city,
    appid: APP_ID,
  };
  url.pathname = CONVERT_TO_GEOCOORD_PATH;
  url.search = new URLSearchParams(params as unknown as Record<string, string>).toString();
  let instance: WeatherAPI;
  let axiosMock: MockAdapter;

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);
    instance = new WeatherAPI(APP_ID);
  });

  test('success request', async () => {
    const handler = axiosMock.onGet(`${url.origin}${url.pathname}`).reply(200, WeatherConverToCoordResultMock);

    const result = await instance.convertToCoord(city);

    expect(result).toEqual(WeatherConverToCoordResultMock);
    expect(handler.history.get[0].params).toEqual(params);
  });
});
