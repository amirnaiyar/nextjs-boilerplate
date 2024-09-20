import { customStyled, ThemeType } from 'theme';
import {
  PaddingProps,
  padding,
  display,
  DisplayProps,
  PositionProps,
  position,
  margin,
} from 'styled-system';

export const MaxWidthLayout = customStyled.main<
  PaddingProps & DisplayProps & PositionProps & { theme?: ThemeType }
>`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  height: 100%;
  // min-height: 500px;
  ${padding};
  ${display};
  ${position};
  ${margin};
  overflow: hidden;
  margin: auto;
`;

export const ToastWrapper = customStyled.div<{ theme?: ThemeType }>`
& .Toastify__close-button {
  align-self: auto;
  margin-right:27px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[1]}) {
      align-self:flex-start;
      margin:auto;
  }
}
& .Toastify__toast-theme--colored {
  margin: 19px;
}
& .Toastify__toast-icon{
  margin-left:24px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-left:auto;
  }
}
& .Toastify__toast-body > div:last-child{
  font-size:18px;
  line-height:22px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size:14px;
    line-height:17px;
  }
}
& .Toastify__toast--default {
  & .Toastify__close-button {
    display: none;
  }
  background: #501F20 !important;
}
& .Toastify__toast--success {
  background: #31A07A !important;
}
& .Toastify__toast--error {
  background: #CD7C5A !important;
}
& .Toastify__toast--warning {
  background: #501F20 !important;
}
& .Toastify__toast--info {
  background: #0F2C28 !important;
}
`;
