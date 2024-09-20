const config = {
  api: {
    // baseUrl: process.env.REACT_APP_BASEURL,
  },

  auth: {
    timeout: 30,
  },
  BASE_API_URL: process.env.NEXT_PUBLIC_BASE_API_ENDPOINT,
  POLLING_INTERVAL: 10000,
  MAX_POLLING_API_CALLS: 30,
  CDN_ENDPOINT: process.env.NEXT_PUBLIC_CDN_ENDPOINT,
  CONFIG_PAGE_ID: process.env.NEXT_PUBLIC_CONFIG_PAGE_ID || '',
  RUDDER_STACK_KEY: process.env.NEXT_PUBLIC_RUDDER_STACK_KEY,
  RUDDER_STACK_URL: process.env.NEXT_PUBLIC_RUDDER_STACK_URL,
  FAQ_PAGE_ID: process.env.NEXT_PUBLIC_FAQ_PAGE_ID || '',
  FRESHDESK_BEARER_TOKEN: process.env.NEXT_PUBLIC_FRESHDESK_BEARER_TOKEN,
  GTAG_ID: process.env.NEXT_PUBLIC_GTAG_ID,
  GTM_ID: process.env.NEXT_PUBLIC_GTM_ID,
};

export const SEO_MAP_ID = process.env.SEO_MAP_ID || '';
export const CDN_ENDPOINT = config.CDN_ENDPOINT;
export const APP_DOWNLOAD = process.env.APP_DOWNLOAD;
export const RUDDER_STACK_KEY = config.RUDDER_STACK_KEY || '';
export const RUDDER_STACK_URL = config.RUDDER_STACK_URL || '';
export const FRESHDESK_BEARER_TOKEN = config.FRESHDESK_BEARER_TOKEN;
export const GTM_ID = config.GTM_ID;
export const GTAG_ID = config.GTAG_ID;

export default config;
