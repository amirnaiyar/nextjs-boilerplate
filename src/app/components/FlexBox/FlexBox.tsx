import {
  forwardRef,
  LegacyRef,
  PropsWithRef,
  ReactNode,
  RefAttributes,
} from 'react';
import { FlexBoxWrapper, CustomFlexProps } from './Flex.styles';

export type FLexBoxProps = CustomFlexProps & {
  onClick?(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void;
  children?: ReactNode;
  className?: string;
  id?: string;
  cursor?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  lineClamp?: number;
  webkitBoxOrient?: 'horizontal' | 'vertical';
};

const FlexBox: React.ForwardRefExoticComponent<
  PropsWithRef<FLexBoxProps> & RefAttributes<HTMLElement>
> = forwardRef(function FlexBox(
  { children, className, cursor, as = 'div', ...rest },
  ref: LegacyRef<HTMLElement>
) {
  return (
    <FlexBoxWrapper
      cursor={cursor}
      className={className}
      ref={ref as any}
      as={as}
      {...rest}
    >
      {children}
    </FlexBoxWrapper>
  );
});

FlexBox.displayName = 'FlexBox';

export default FlexBox;
