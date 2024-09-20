import { CDN_ENDPOINT } from 'config';
import { Browser } from 'interfaces';

export const getCDNUrl = (path: string) => {
  const platform = 'NATIVE_APP';
  return `${CDN_ENDPOINT}/${platform}${path}`;
};

export const isBrowser = () => typeof window !== 'undefined';

export const getBrowserName = (ua: string): Browser => {
  const agent = ua.toLowerCase();
  switch (true) {
    case agent.indexOf('edge') > -1:
      return 'edge';
    case agent.indexOf('opr') > -1 && !!(<any>window).opr:
      return 'opera';
    case agent.indexOf('chrome') > -1 && !!(<any>window).chrome:
      return 'chrome';
    case agent.indexOf('trident') > -1:
      return 'ie';
    case agent.indexOf('firefox') > -1:
      return 'firefox';
    case agent.indexOf('safari') > -1:
      return 'safari';
    default:
      return 'other';
  }
};

/**
 * Maps url value to the provide params object
 * @param {string} url - url containing the pattern as {} to be replaced by the param value
 * @param {Object} params - contains the map of key {string} value {string} to be mapped against the string
 * @returns {string} - replaced with the value matched against the provide url
 */
export const replaceParamInString = (
  str: string,
  params: { [key: string]: any }
): string => {
  const regexReqParam = /[^{]+(?=})/g;
  const matches = str.match(regexReqParam) || [];
  let changedUrl = str;
  matches.forEach((match) => {
    const param = params[match] !== undefined ? params[match] : '';
    changedUrl = changedUrl.replace(`{${match}}`, param);
  });
  return changedUrl;
};

export const isIos = () => {
  if (typeof window === 'undefined') {
    // If window object is not available (server-side rendering), assume it's not iOS
    return false;
  }

  return (
    /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
  );
};
