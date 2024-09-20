import { variant, maxWidth } from 'styled-system';
import { customStyled, ThemeType } from 'theme';

export type VariantsType = 'noBorder' | 'fullScreen' | 'fullScreenVideo';

export type ModalPosition = 'center' | 'flex-end' | 'baseline';

export const ModalContainer = customStyled.div<{
  theme?: ThemeType;
  position?: ModalPosition;
  bodyBackground: string;
}>`
    width: 100%;
    height: 100%;
    background: ${({ bodyBackground = 'rgba(0,0,0,0.2)' }) => bodyBackground};
    display: flex;
    align-items: ${(props) => props.position};
    justify-content: center;
    position: fixed;
    z-index: 9999999;
    top: 0px;
    left: 0px;
    border: 0px;
    backdrop-filter: blur(4px);

    @media (min-width: ${({ theme }) => theme.breakpoints[0]}) {
      max-width: ${({ theme }) => theme.maxDesktopLayoutWidth}px;
      left: 50%;
      transform: translate(-50%);
    }
    overscroll-behavior: contain;
`;

export const ModalInnerBox = customStyled.div<{
  theme?: ThemeType;
  variant?: VariantsType;
  maxWidth?: number;
  showTill?: number;
  noPadding?: boolean;
  background?: '#fff' | '#000' | '#11151C' | 'rgba(0,0,0,0)' | 'transparent';
  disableBorderRadius?: boolean;
  bottom?: string;
}>`
  border-radius: ${({ disableBorderRadius = false }) =>
    disableBorderRadius ? '0' : '18px 18px 18px 18px;'};
    background:${({ background = '#000' }) => background};
    //overscroll-behavior-y: contain;
    // min-height: 713px;
    position:absolute;
    z-index:999;
    left: 0%;
    right: 0%;
    bottom: ${({ bottom = '0px' }) => bottom};
    transition: bottom 0.3s ease-out;
    // top: 50%;
    margin: 0 auto;
    transform: scale(0.8);
    // text-align:center;
    // padding-bottom:20px;
    max-width:900px;
    padding: ${({ noPadding }) => (noPadding ? '0' : '20px')};
    @media (max-width: ${({ showTill = 1921 }) => showTill}px){
      width: 100%;
      padding: ${({ noPadding }) => (noPadding ? '0' : '10px')};
    }
    border-top: 1.4px solid;
    border-image-slice: 1;
    border-image-source:${({ theme }) => theme.gradients.greyBorderTransparentEdges};
    ${variant({
      variants: {
        noBorder: {
          border: 'none',
        },
        fullScreen: {
          transform: 'none',
          left: 0,
          // top: 0,
          position: 'relative',
          maxWidth: 'none',
          width: '100%',
        },
        fullScreenVideo: {
          border: 'none',
          transform: 'none',
          left: 0,
          top: 0,
          position: 'relative',
          maxWidth: 'none',
          width: '100%',
          padding: '0px!important',
        },
      },
    })}
    ${maxWidth},
    
`;

export const ModalContentBox = customStyled.div<{ variant?: VariantsType }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    position: relative;
    ${variant({
      variants: {
        fullScreen: {
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
        fullScreenVideo: {
          alignItems: 'center',
          justifyContent: 'center',
        },
      },
    })}

`;
export const ModalClose = customStyled.div<{
  variant?: VariantsType;
  right?: string;
  top?: string;
  desktopRight?: string;
  desktopTop?: string;
  disableCross?: boolean;
}>`
    position: absolute;
    z-index: 999;
    cursor: pointer;
    @media (min-width: 500px){
      right: ${(props) => (props.desktopRight ? props.desktopRight : '7%')};
      top: ${(props) => (props.desktopTop ? props.desktopTop : '8%')};
    };
    @media (min-width: 385px){
      right: ${(props) => (props.right ? props.right : '7%')};
      top: ${(props) => (props.top ? props.top : '8%')};
    };
    @media (min-width: 320px) and (max-width: 385px) {
      right: ${(props) => (props.right ? props.right : '7%')};
      top: ${(props) => (props.top ? props.top : '14%')};
    };
    pointer-events: ${({ disableCross }) => (disableCross ? 'none' : 'auto')};
    ${variant({
      variants: {
        fullScreen: {
          right: '7%',
          top: '8%',
        },
      },
    })}
`;
export const ModalTopLine = customStyled.div<{ theme?: ThemeType }>`
    z-index: 999;
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    height: 2px;
    width: 42px;
    background: ${({ theme }) => theme.colors.whites[7]}};
    border-radius: 2px;
`;
