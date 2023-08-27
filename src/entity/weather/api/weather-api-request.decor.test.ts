import { expect, test, describe, beforeEach} from 'vitest'
import {
  AxiosError, AxiosHeaders, type AxiosRequestHeaders, type AxiosResponse,
} from 'axios';
import { weatherAPIRequest } from './weather-api-request.decor';

const dataError = { message: 'some error text' };

class Test {
  testString = 'test';

  @weatherAPIRequest
  async foo(one: number, error?: boolean, noAxios?: boolean): Promise<string> {
    if (noAxios) throw new Error('noAxios error');
    if (error) {
      const headers: AxiosRequestHeaders = new AxiosHeaders({ 'Content-Type': 'application/json' });
      const response: AxiosResponse<{message: string}> = {
        data: dataError,
        status: 400,
        statusText: 'fail',
        headers,
        config: {
          headers,
        },
      };
      throw new AxiosError('axios error', '400', undefined, {}, response);
    }
    return `${this.testString}-${one}`;
  }
}

describe('weatherAPIRequest', () => {
  let testInstance: Test;

  beforeEach(() => {
    testInstance = new Test();
  });

  test('Метод правильно отрабатывает', async () => {
    const n = 1;

    const result = await testInstance.foo(n);

    expect(result).toEqual(`${testInstance.testString}-${n}`);
  });

  test('Throw axiosError', async () => {
    const n = 1;

    try {
      await testInstance.foo(n, true);
    } catch (error) {
      expect(error).toEqual(dataError);
    }
  });

  test('Throw no axiosError', async () => {
    const n = 1;

    try {
      await testInstance.foo(n, true, true);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
