import { customStyled, ThemeType } from 'theme';
import {
  ButtonStyleProps,
  buttonStyle,
  TypographyProps,
  typography,
  HeightProps,
  WidthProps,
  variant,
  ColorProps,
  BackgroundProps,
  BorderProps,
  space,
  FlexProps,
  flex,
  fontFamily,
  fontWeight,
  MarginProps,
} from 'styled-system';
import FlexBox from 'components/FlexBox';

export type CustomButtomProps = ButtonStyleProps &
  TypographyProps &
  HeightProps &
  WidthProps &
  ColorProps &
  BackgroundProps &
  BorderProps &
  MarginProps &
  FlexProps & { textTransform?: string };

export const ButtonInnerWrapper = customStyled.button<
  {
    theme?: ThemeType;
    disabled: boolean;
    loaderColor: string;
    arrowHeight: string;
    arrowWidth: string;
    arrowColor?: string;
    $loading: boolean;
    success: boolean;
    primaryHighlightColor?: string;
    $borderColor?: string;
    $backgroundColor?: string;
    $borderWidth?: string;
    cornerIndentation?: string;
    textColor?: string;
    rightIcon?: string;
    rightIconWidth?: string;
    paddingInline?: string;
    paddingBlock?: string;
  } & CustomButtomProps
>`
  ${buttonStyle};
  ${typography};

  ${space};
  ${flex};

  padding: 0px;
  position: relative;
  border: none;
  color: ${({ textColor = 'white' }) => textColor};
  background: transparent;
  font-weight: 600;  ${fontWeight};
  font-family: ${({ theme }) => theme.fonts.primary};
  letter-spacing: ${({ theme }) => theme.letterSpacings.primary}; ${fontFamily};
  padding-block: ${({ paddingBlock }) => paddingBlock};
  text-transform: ${({ textTransform = 'capitalize' }) => textTransform};

  ${({
    disabled = false,
    arrowWidth,
    arrowHeight,
    $loading = false,
    success = false,
    theme,
    primaryHighlightColor = theme.colors.mint,
    arrowColor = 'white',
    rightIcon,
    rightIconWidth = '15px',
    paddingInline,
  }) =>
    variant({
      variants: {
        disabled: {
          background: '',
        },
        custom: {
          '& svg path': disabled
            ? {
                fill: theme.colors.white,
              }
            : {},
          '& > span::after ': {
            content:
              disabled || $loading || success
                ? '""'
                : `url("data:image/svg+xml,%3Csvg width='${arrowWidth}' height='${arrowHeight}' viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.83203 7.58594C8.71484 7.49219 8.66797 7.35156 8.66797 7.1875C8.66797 7.04688 8.71484 6.90625 8.83203 6.8125L11.0586 4.5625H1.54297C1.21484 4.5625 0.980469 4.32812 0.980469 4C0.980469 3.69531 1.21484 3.4375 1.54297 3.4375H11.0586L8.83203 1.21094C8.59766 1 8.59766 0.648438 8.83203 0.4375C9.04297 0.203125 9.39453 0.203125 9.62891 0.4375L12.8164 3.625C13.0273 3.83594 13.0273 4.1875 12.8164 4.39844L9.62891 7.58594C9.39453 7.82031 9.04297 7.82031 8.83203 7.58594Z' fill='${arrowColor}'%3E%3C/path%3E%3C/svg%3E")`,
            position: 'absolute',
            opacity: 0,
            right: '4px',
            transition: '0.5s',
            top: '0px',
          },
          '&:hover > span::after ': {
            opacity: 1,
            right: '0px',
          },
          '&:hover > span ': {
            paddingRight: disabled || $loading || success ? 0 : 25,
          },
          '& > span ': {
            transition: '0.2s',
            position: 'relative',
            width: 'fit-content',
            display: 'flex',
            justifyContent: 'center',
          },
          '@media(max-width:767px)': {
            '& > span ': {
              paddingRight: disabled || $loading || success ? 0 : 25,
            },
            '&:hover > span ': {
              paddingRight: disabled || $loading || success ? 0 : 25,
            },
            '& span:: > after ': {
              opacity: 1,
              right: '0px',
            },
            '&:hover > span::after ': {
              right: '0px',
            },
          },
          display: 'flex',
          whiteSpace: 'pre',
          justifyContent: 'center',
          transition: 'all 0.2s',
          '& span.color-highlight-text': {
            color: primaryHighlightColor,
          },
        },
        dynamic: {
          '& svg path': disabled
            ? {
                fill: theme.colors.white,
              }
            : {},

          // icon at rest
          '& > span::after ': {
            content:
              disabled || $loading || success || !rightIcon
                ? '""'
                : `url("${rightIcon}")`,
            position: 'absolute',
            opacity: 0,
            right: `calc(${paddingInline} - ${rightIconWidth} + 23px)`,
            transition: '0.5s',
          },
          // icon on hover
          '&:hover > span::after ': {
            opacity: 1,
            right: `calc(${paddingInline} - ${rightIconWidth} + 15px)`,
          },
          // text on rest
          '& > span ': {
            transition: '0.2s',
            position: 'relative',
            width: 'fit-content',
            display: 'flex',
            justifyContent: 'center',
            paddingX: rightIcon
              ? `calc(${paddingInline} + 10px )`
              : paddingInline,
          },
          // text on hover
          '&:hover > span ': {
            paddingLeft: paddingInline,
            paddingRight: rightIcon
              ? `calc(${paddingInline} + 20px )`
              : paddingInline,
          },

          '@media(max-width:767px)': {
            // icon at rest
            '& span:: after ': {
              opacity: 1,
              right: `calc(${paddingInline} - ${rightIconWidth} + 15px)`,
            },
            // icon on hover
            '&:hover > span::after ': {
              opacity: 1,
              right: `calc(${paddingInline} - ${rightIconWidth} + 15px)`,
            },
            // text at rest
            '& > span ': {
              paddingRight:
                rightIcon && !disabled
                  ? `calc(${paddingInline} + 20px )`
                  : paddingInline,
              paddingLeft: paddingInline,
            },
            // text on hover
            '&:hover > span ': {
              paddingRight:
                rightIcon && !disabled
                  ? `calc(${paddingInline} + 20px )`
                  : paddingInline,
              paddingLeft: paddingInline,
            },
          },
          display: 'flex',
          whiteSpace: 'pre',
          justifyContent: 'center',
          margin: '1px',
          borderRadius: '2px',
          fontFamily: theme.fonts.primary,
          transition: 'all 0.2s',
          '& span.color-highlight-text': {
            color: primaryHighlightColor,
          },
        },

        underline: {
          borderBottom: `1px solid ${theme.colors.white}`,
          color: theme.colors.white,
          background: theme.colors.transparent,
          opacity: disabled ? 0.2 : 1,
          '&:hover': {
            borderBottom: disabled
              ? `1px solid ${theme.colors.white}`
              : `1px solid ${theme.colors.silver}`,
          },
          '& svg path': disabled
            ? {
                fill: theme.colors.white,
              }
            : {},
        },
      },
    })};
    transform :rotateY(180deg);

    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
`;
export const ButtonContentWrapper = customStyled(FlexBox)<{ hide?: boolean }>`
  opacity:${({ hide }) => (hide ? 0 : 1)};
  inset :0;
`;
export const ButtonFallback = customStyled(FlexBox)<{ bgColor?: string }>`
  position:absolute;
  inset :6px;
  left:12px;
  right:12px;
  background-color:${({ bgColor = '#CD413A' }) => bgColor};
  z-index:-1;
  isolation:isolate;
  border-radius: 5px;
`;

export const ButtonWrapper = customStyled(FlexBox)<{
  $borderColor?: string;
  $borderRadius: string;
  $backgroundColor?: string;
  $borderWidth?: string;
  cornerIndentation?: string;
}>`
 position: relative;
 isolation: isolate;
 display: inline-grid;
 z-index:1;
 font-size: 17px;
 border: 0;
 text-transform: uppercase;
 box-shadow: 10px 10px 20px rgba(0, 0, 0, .6);
  transform: rotateY(180deg);
 clip-path:${({ cornerIndentation }) => `polygon(
    0% ${cornerIndentation},
    ${cornerIndentation} 0,

    100% 0,
    100% calc(100% - ${cornerIndentation}),

    calc(100% - ${cornerIndentation}) 100%,
    0 100%)`};

&::after,
&::before {
 content: '';
 position: absolute;
 inset: 0;
 border-radius: ${({ $borderRadius }) => $borderRadius};
}

&::before {
 background: ${({ $borderColor }) => $borderColor};
 z-index: -2;
 }

&::after {

 background: ${({ $backgroundColor }) => $backgroundColor};
 z-index: -1;
 clip-path:${({ $borderWidth, cornerIndentation }) => `polygon(

           ${$borderWidth}
           calc(${cornerIndentation} + ${$borderWidth} * .5),

           calc(${cornerIndentation} + ${$borderWidth} * .5) ${$borderWidth},

           calc(100% - ${$borderWidth})
           ${$borderWidth},

           calc(100% - ${$borderWidth})
           calc(100% - calc(${cornerIndentation} + ${$borderWidth} * .5)),

           calc(100% - calc(${cornerIndentation} + ${$borderWidth} * .5)) calc(100% - ${$borderWidth}),
           ${$borderWidth} calc(100% - ${$borderWidth}))`};
}
`;

export const PrimaryEdgeWrapper = customStyled(FlexBox)`
 inset :0;
`;
export const PrimaryEdge = customStyled(FlexBox)<{
  cornerIndentation: string;
  color: string;
  angle: number;
  size: string;
  $borderWidth?: string;
}>`
  position: absolute;
  height :${({ size }) => size};
  width :${({ size }) => size};
  transform:${({ angle }) => (angle === 225 ? 'rotate(90deg)' : 'rotate(270deg)')};
  background: ${({ color }) => color};
    clip-path:${({ $borderWidth = '2.5px', cornerIndentation }) => `polygon(

             calc(${$borderWidth} - 2.5px)
              calc(${cornerIndentation} + ${$borderWidth} * .5),

              calc(${cornerIndentation} + ${$borderWidth}  * .5) calc(${$borderWidth} - 2.5px),

              calc(100% - ${$borderWidth})
              calc(${$borderWidth} - 2.5px),

              calc(100% - ${$borderWidth})
              calc(100% - calc(${cornerIndentation} + ${$borderWidth} * .5)),

              calc(100% - calc(${cornerIndentation} + ${$borderWidth} * .5)) calc(100% - ${$borderWidth}),
              calc(${$borderWidth} - 2.5px) calc(100% - ${$borderWidth}))`};

`;

export const RadioButtonWrapper = customStyled.span<{
  selected?: boolean;
  theme?: ThemeType;
}>`
  min-width: 24px;
  min-height: 24px;
  background: ${({ selected, theme }) => (selected ? theme.colors.whites[4] : 'transparent')};
 border: ${({ selected, theme }) =>
   selected
     ? `1px solid ${theme.colors.whites[11]}`
     : `1px solid ${theme.colors.whites[5]}`};
  box-sizing: border-box;
  border-radius: 50%;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    width: 20px;
    height: 20px;
    background: ${({ selected, theme }) => (selected ? theme.colors.whites[4] : 'transparent')};
    border: ${({ selected, theme }) =>
      selected
        ? `1px solid ${theme.colors.whites[11]}`
        : `1px solid ${theme.colors.whites[5]}`};
  }
`;

export const CheckboxButtonWrapper = customStyled.span<{
  selected?: boolean;
  theme?: ThemeType;
}>`
  border-radius: 3px;
  min-width: 16px;
  min-height: 16px;
  border: ${({ selected, theme }) => (selected ? 'none' : `1px solid ${theme.colors.whites[5]}`)};
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = customStyled(FlexBox)<{
  isDisabled: boolean;
}>`
  transform: translate(0px);
  opacity: ${({ isDisabled }) => (isDisabled ? 0.5 : 1)};

`;

export const ButtonAnimationWrapper = customStyled.div<{
  isButtonPressed?: boolean;
}>`
  transform: ${({ isButtonPressed }) => (isButtonPressed ? 'translateY(5px)' : 'translateY(0px)')} ;
  transition: transform 200ms;
`;
