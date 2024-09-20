import { baseTheme, maxLayoutWidth } from './baseTheme';
import customStyled from './customStyled';
// import { parse } from 'cookie'

const theme = {
  ...baseTheme,
  maxLayoutWidth,
};

export { theme, customStyled };
export default theme;

export type ThemeType = typeof theme;
