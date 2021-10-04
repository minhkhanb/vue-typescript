import appConfig from '@/common/config/app';

export function logger<T>(
  target: T,
  propertyKey: string,
  descriptor: PropertyDescriptor
): void {
  if (!appConfig.IS_LOGGING) return;

  const original = descriptor.value;

  descriptor.value = async function (...args: IArguments[]) {
    if (args.length) {
      console.log('%s --> params: ', propertyKey, ...args);
    }

    const result = original.call(this, ...args);
    console.log('%s --> result: ', propertyKey, await result);

    return result;
  };
}
