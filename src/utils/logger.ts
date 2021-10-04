/*eslint-disable @typescript-eslint/no-explicit-any*/
import appConfig from '@/config/app';

export const logger = (() => {
  const isDebug = appConfig.IS_LOGGING;

  return {
    info: function (...args: any) {
      if (!isDebug) return;

      console.log(...args);
    },
    init: function () {
      console.log('Logger init version: ', this.version);
    },
    version: '1.0.0',
  };
})();
