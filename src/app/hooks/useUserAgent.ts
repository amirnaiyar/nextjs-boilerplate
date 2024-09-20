import { Browser } from 'interfaces';
import { getBrowserName, isBrowser } from 'utils/utils';

const REGEX =
  /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i;

const useUserAgent = (
  userAgent = ''
): { isMobile: boolean; browserName: Browser } => {
  let ua = userAgent;
  if (!ua) {
    ua = isBrowser() ? navigator.userAgent : '';
  }
  return {
    isMobile: Boolean(ua.match(REGEX)),
    browserName: getBrowserName(ua),
  };
};

export default useUserAgent;
