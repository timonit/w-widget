import { expect, test, describe, beforeEach} from 'vitest';
import axios, { type AxiosResponse } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { API } from '@/shared';

const baseAPI = 'http://localhost:8000';

export default class TestAPI extends API {
  baseAPI = baseAPI;
}

describe('request', () => {
  let instance: TestAPI;
  let mockedAxios: MockAdapter;
  const data = { testData: 'testData' };
  const responseData = { test: 'test' };

  beforeEach(() => {
    instance = new TestAPI();
    mockedAxios = new MockAdapter(axios);
  });

  test('method post, status code 200', async () => {
    const handler = mockedAxios.onPost(`${baseAPI}/`, data).reply(200, responseData);

    const result: AxiosResponse = await instance.request({ method: 'POST', data });

    expect(result.data).toEqual(responseData);
    expect(JSON.parse(handler.history.post[0].data)).toEqual(data);
  });

  test('method post, status code 400+ throw AxiosError', async () => {
    mockedAxios.onGet(`${baseAPI}/`).reply(400, responseData);

    try {
      await instance.request({ method: 'GET' });
    } catch (err: any) {
      expect(err.isAxiosError).toBeTruthy();
    }
  });
});

describe('method GET', () => {
  let instance: TestAPI;
  let mockedAxios: MockAdapter;

  beforeEach(() => {
    instance = new TestAPI();
    mockedAxios = new MockAdapter(axios);
  });

  test('check method type', async () => {
    const handler = mockedAxios.onGet(`${baseAPI}/`).reply(200);

    await instance.get();

    expect(handler.history.get.length === 1).toBeTruthy();
  });
});

describe('method POST', () => {
  let instance: TestAPI;
  let mockedAxios: MockAdapter;
  const data = { testData: 'testData' };

  beforeEach(() => {
    instance = new TestAPI();
    mockedAxios = new MockAdapter(axios);
  });

  test('check method type', async () => {
    const handler = mockedAxios.onPost(`${baseAPI}/`).reply(200);

    await instance.post({ data });

    expect(handler.history.post.length === 1).toBeTruthy();
  });
});

describe('method delete', () => {
  let instance: TestAPI;
  let mockedAxios: MockAdapter;
  const data = { testData: 'testData' };
  const responseData = { test: 'test' };

  beforeEach(() => {
    instance = new TestAPI();
    mockedAxios = new MockAdapter(axios);
  });

  test('check method type', async () => {
    const handler = mockedAxios.onDelete(`${baseAPI}/`, data).reply(200, responseData);

    await instance.delete();

    expect(handler.history.delete.length === 1).toBeTruthy();
  });
});

describe('method PATCH', () => {
  let instance: TestAPI;
  let mockedAxios: MockAdapter;
  const data = { testData: 'testData' };

  beforeEach(() => {
    instance = new TestAPI();
    mockedAxios = new MockAdapter(axios);
  });

  test('check method type', async () => {
    const handler = mockedAxios.onPatch(`${baseAPI}/`, data).reply(200);

    await instance.patch({ data });

    expect(handler.history.patch.length === 1).toBeTruthy();
  });
});
