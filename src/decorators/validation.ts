/* eslint-disable @typescript-eslint/no-explicit-any */

type Validator = (x: any) => boolean;

// save the marks
const validateMap: Record<string, Validator[]> = {};

// 1. mark the parameters need to be validated
function typedDecoratorFactory(validator: Validator): ParameterDecorator {
  return (_, key, index) => {
    const target = validateMap[key as string] ?? [];
    target[index] = validator;
    validateMap[key as string] = target;
  };
}

export function validate<T>(
  target: T,
  key: string,
  descriptor: PropertyDescriptor
): void {
  const originalFn = descriptor.value;
  descriptor.value = function (...args: IArguments[]) {
    // 2. run the validators
    const validatorList = validateMap[key];
    if (validatorList) {
      args.forEach((arg, index) => {
        const validator = validatorList[index];

        if (!validator) return;

        const result = validator(arg);

        if (!result) {
          throw new Error(
            `Failed for parameter: ${arg} of the index: ${index}`
          );
        }
      });
    }

    // 3. run the original method
    return originalFn.call(this, ...args);
  };
}

export const isInt = typedDecoratorFactory((x) => Number.isInteger(x));
export const isString = typedDecoratorFactory((x) => typeof x === 'string');
