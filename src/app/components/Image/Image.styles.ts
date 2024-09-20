import {
  space,
  BorderProps,
  border,
  SpaceProps,
  WidthProps,
  HeightProps,
  width,
  height,
  BackgroundProps,
  background,
} from 'styled-system';
import { customStyled } from 'theme';

interface Image {
  src: string;
  borderRadius?: string | number;
  name?: string;
  maxHeight?: string | number;
  maxWidth?: string | number;
  cursor?: string;
  type?: string;
  priority?: boolean;
  loading?: 'lazy' | 'eager';
}
export type ImageType = Image &
  BorderProps &
  SpaceProps &
  WidthProps &
  HeightProps &
  BackgroundProps;

export const ImageWrapper = customStyled.img<ImageType>`
  ${(props) => ({
    borderRadius: props.borderRadius,
    maxHeight: props.maxHeight,
    maxWidth: props.maxWidth,
    cursor: props.cursor,
  })};
  ${width};
  ${height};
  ${space};
  ${border};
  ${background};
`;
