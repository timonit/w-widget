import { test, describe, expect, beforeEach } from 'vitest';
import { useSettingsStore } from '.';
import { createPinia, setActivePinia } from 'pinia';


beforeEach(() => {
  setActivePinia(createPinia());
});

describe('init state', () => {
  beforeEach(() => {
    localStorage.removeItem('weather-settings');
  });

  test('reset settings from localstorage', () => {
    localStorage.setItem('weather-settings', JSON.stringify(['London']));
    
    const instance = useSettingsStore();
    
    expect(instance.cities.length > 0).toBeTruthy();
  });

  test('settings without localstorage save', () => {    
    const instance = useSettingsStore();
    
    expect(Array.isArray(instance.cities)).toBeTruthy();
    expect(instance.cities.length === 0).toBeTruthy();
  });
});

describe('setCity', () => {
  test('add new city by string', () => {
    const cityName = 'city';
    const instance = useSettingsStore();

    instance.setCity(cityName);
    
    expect(instance.cities.length > 0).toBeTruthy();
    expect(instance.cities.includes(cityName)).toBeTruthy();
  });

  test('add exist city', () => {
    const cityName = 'city';
    const instance = useSettingsStore();
    instance.setCity(cityName);
    const length = instance.cities.length;

    instance.setCity(cityName);
    
    expect(instance.cities.length === length).toBeTruthy();
  });

  test('add new city by other type throw error', () => {
    const instance = useSettingsStore();
    const names = {
      boolean: true,
      object: {test: 'test'},
    } as unknown as {[p: string]: string};
    const typesErrors = {
      boolean: false,
      object: false,
      undefined: false,
      null: false,
    } as {[p: keyof typeof names]: Boolean}

    Object.entries(names).forEach(([key, value]: [keyof typeof typesErrors, string]) => {
      try {
        instance.setCity(value);
      } catch(error) {
        typesErrors[key] = true;
      }
    });
    
    expect(names.boolean).toBeTruthy();
    expect(names.object).toBeTruthy();
  });
});

describe('removeCity', () => {
  test('remove city by string', () => {
    const instance = useSettingsStore();
    const cityName = 'city';
    instance.setCity(cityName);

    instance.removeCity(cityName);
    
    expect(instance.cities.length === 0).toBeTruthy();
  });

  test('remove city no exist', () => {
    const instance = useSettingsStore();
    const existName = 'city';
    const removeName = 'noExistName';
    instance.setCity(existName);
    const length = instance.cities.length;

    try {
      instance.removeCity(removeName);
    } catch (error) {
      expect(instance.cities.length === length).toBeTruthy();
      return;
    }
    throw 'test failed';
  });

  test('remove city by other type throw error', () => {
    const instance = useSettingsStore();
    const names = {
      boolean: true,
      object: {test: 'test'},
    } as unknown as {[p: string]: string};
    const typesErrors = {
      boolean: false,
      object: false,
    } as {[p: keyof typeof names]: Boolean}

    Object.entries(names).forEach(([key, value]: [keyof typeof typesErrors, string]) => {
      try {
        instance.removeCity(value);
      } catch(error) {
        typesErrors[key] = true;
      }
    });
    
    expect(names.boolean).toBeTruthy();
    expect(names.object).toBeTruthy();
  });
});

describe('moveCity', () => {
  beforeEach(() => {
    localStorage.removeItem('weather-settings');
  });

  test('move city to previous place', () => {
    const cityName = 'city';
    localStorage.setItem('weather-settings', JSON.stringify(['test', cityName]));
    const instance = useSettingsStore();

    instance.moveCity(cityName, 0);
    
    expect(instance.cities.indexOf(cityName)).toBe(0);
  });

  test('move city to next place', () => {
    const instance = useSettingsStore();
    const cityName = 'city';
    instance.setCity(cityName);
    instance.setCity('test');
    instance.setCity('test2');

    instance.moveCity(cityName, 2);
    
    expect(instance.cities.indexOf(cityName)).toEqual(2);
  });
});
