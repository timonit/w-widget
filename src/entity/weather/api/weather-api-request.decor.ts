import { AxiosError } from 'axios';

export function weatherAPIRequest<T>(
  target: T,
  propKey: keyof typeof target,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  const cb = descriptor.value;
  return {
    ...descriptor,
    value: async function wrapedMethod(...args: any[]) {
      try {
        const result = await cb.call(this, ...args);
        return result;
      } catch (error) {
        if (error instanceof AxiosError) throw error.response?.data;
        else throw error;
      }
    },
  };
}

export default weatherAPIRequest;
