export abstract class BaseStorage<T> {
  abstract key: string;

  save(settings: T) {
    localStorage.setItem('weather-settings', JSON.stringify(settings));
  }

  get(): T | null {
    const item = localStorage.getItem('weather-settings');
    if (!item) return null;

    return JSON.parse(item) as T;
  }
}
