import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import theme, { ThemeType } from 'theme';
import GlobalStyles from './Glolbal.styles';

export interface Props {
  children?: React.ReactNode | any;
  extraTheme?: ThemeType;
  cssString?: string;
}

const ThemeProvider: React.FunctionComponent<Props> = ({
  children,
  extraTheme = {},
  cssString,
}) => {
  return (
    <EmotionThemeProvider theme={{ ...theme, ...extraTheme }}>
      <GlobalStyles cssString={cssString} />
      {children}
    </EmotionThemeProvider>
  );
};

export default ThemeProvider;
