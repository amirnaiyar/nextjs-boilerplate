import { customStyled } from 'theme';
import {
  flexbox,
  FlexboxProps,
  PaddingProps,
  padding,
  BackgroundProps,
  background,
  margin,
  MarginProps,
  PositionProps,
  position,
  typography,
  TypographyProps,
  BorderProps,
  border,
  space,
  SpaceProps,
  gridGap,
  GridGapProps,
  LayoutProps,
  layout,
  gridArea,
  GridAreaProps,
  boxShadow,
  BoxShadowProps,
} from 'styled-system';

export type CustomFlexProps = FlexboxProps &
  PaddingProps &
  BackgroundProps &
  MarginProps &
  PositionProps &
  TypographyProps &
  BorderProps &
  SpaceProps &
  GridGapProps &
  LayoutProps &
  BoxShadowProps &
  GridAreaProps & {
    as?: any;
  };

export const FlexBoxWrapper = customStyled.div<
  CustomFlexProps & {
    transform?: string;
    cursor?: string;
    lineClamp?: number;
    webkitBoxOrient?: 'horizontal' | 'vertical';
  }
>`
  display: flex;
  ${flexbox};
  ${padding};
  ${background};
  ${margin};
  ${position};
  ${typography};
  ${border};
  ${space};
  ${gridGap};
  ${gridArea};
  ${layout};
  ${boxShadow};
  cursor: ${({ cursor = 'inherit' }) => cursor};
  transform: ${({ transform = 'none' }) => transform};

  ${({ lineClamp }) => lineClamp && `-webkit-line-clamp: ${lineClamp}`};
  ${({ webkitBoxOrient }) => webkitBoxOrient && `-webkit-box-orient: ${webkitBoxOrient}`};

  @media (max-width: 768px) {
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
