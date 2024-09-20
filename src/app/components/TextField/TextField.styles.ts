import {
  TextStyleProps,
  TypographyProps,
  typography,
  PositionProps,
  position,
  PaddingProps,
  MarginProps,
  margin,
  padding,
  color,
  ColorProps,
  borderRadius,
  BorderRadiusProps,
  border,
  BorderProps,
  alignSelf,
  AlignSelfProps,
  zIndex,
  variant,
  width,
  WidthProps,
} from 'styled-system';
import theme, { ThemeType, customStyled } from 'theme';

export type TextVariants = 'link';

type Tags =
  | 'span'
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'a'
  | 'li'
  | 'div';

export interface TextProps {
  as?: Tags;
  color?: string;
  href?: string;
  target?: string;
  onClick?(event: React.MouseEvent<any>): void;
  textTransform?: string;
  textDecoration?: string;
  variant?: TextVariants;
  borderImageSource?: string;
  whiteSpace?: string;
  highlightedWords?: any;
  highlightColor?: string;
  textDecorationColor?: string;
  primaryHighlightColor?: string;
}

export type TextWrapperType = TextStyleProps &
  PaddingProps &
  MarginProps &
  PositionProps &
  TypographyProps &
  ColorProps &
  BorderRadiusProps &
  BorderProps &
  AlignSelfProps &
  WidthProps;

export const TextWrapper = customStyled.span<
  TextProps &
    TextWrapperType & {
      theme?: ThemeType;
      textTransform?: string;
      textDecoration?: string;
      variants?: TextVariants;
      highlightColor?: string;
      cursor?: string;
      highlightedBorder?: string;
      highlightedBackground?: string;
    }
>`
  & .color-text{
    color: ${({ highlightColor = theme.colors.secondary }) => highlightColor};
  }
  & .highlight-text {
    color: ${({ highlightColor = '#FFFFFF' }) => highlightColor};
  }
  & .color-highlight-text {
    color: ${({ primaryHighlightColor = theme.colors.secondary }) => primaryHighlightColor};
    text-decoration: ${({ textDecoration = 'auto' }) => textDecoration};
    text-decoration-color: ${({
      textDecorationColor,
      primaryHighlightColor = theme.colors.secondary,
    }) => textDecorationColor || primaryHighlightColor};
    ${({ highlightedBorder, highlightedBackground }) =>
      (highlightedBackground || highlightedBorder) &&
      `
        padding: 0px 2px;
        background: ${highlightedBackground};
        border: ${highlightedBorder};
        border-radius: 2px;
    `}
  }
  font-family: inherit;
  line-height: 1.4;
  -webkit-font-smoothing: antialiased;
  text-underline-offset: 2px;
  text-transform: ${({ textTransform = 'initial' }) => textTransform};
  text-decoration: ${({ textDecoration = 'auto' }) => textDecoration};
  border-image-source: ${({ borderImageSource = '' }) => borderImageSource};
  white-space: ${({ whiteSpace = 'unset' }) => whiteSpace};
  cursor: ${({ cursor }) => cursor ?? ''};
  ${typography};  
  ${position};
  ${margin};
  ${padding};
  ${color};
  ${borderRadius};
  ${border};
  ${alignSelf};
  ${zIndex};
  ${width};
  ${variant({
    variants: {
      link: {
        textDecoration: 'underline',
        cursor: 'pointer',
      },
    },
  })};
  h1 {
   font-size: 30px; 
  }
`;
