import React from 'react';
import { ImageWrapper, ImageType } from './Image.styles';

export interface ImageProps extends ImageType {
  onClick?(event: React.MouseEvent): void;
  imageLoaded?: () => void;
  draggable?: boolean;
}

const Image: React.FunctionComponent<ImageProps & { alt?: string }> = ({
  src,
  height,
  width,
  name = 'rario-img',
  borderRadius,
  cursor,
  onClick,
  imageLoaded,
  draggable = false,
  loading = 'lazy',
  alt,
  ...rest
}) => {
  return (
    <ImageWrapper
      loading={loading}
      onClick={onClick}
      onLoad={() => {
        imageLoaded && imageLoaded();
      }}
      alt={alt}
      name={name}
      src={src}
      height={height as string}
      width={width as string}
      borderRadius={borderRadius}
      cursor={cursor}
      draggable={draggable}
      {...rest}
      priority={true}
    />
  );
};

export default Image;
