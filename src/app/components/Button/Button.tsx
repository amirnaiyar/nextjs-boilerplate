import {
  CustomButtomProps,
  ButtonInnerWrapper,
  ButtonContentWrapper,
  PrimaryEdge,
  PrimaryEdgeWrapper,
  ButtonWrapper,
  ButtonContainer,
  ButtonFallback,
  ButtonAnimationWrapper,
} from './Button.styles';
import Image from '../Image';
import FlexBox from 'components/FlexBox';
import { isValidElement, useState } from 'react';
import { colorHighlightWords } from 'components/TextField/TextField';
import theme from 'theme';

const ActiveButtonColorVariants = new Map([
  ['primaryOutline', theme.button.primaryOutline.active],
  ['primaryFilled', theme.button.primaryFilled.active],
  ['secondaryOutline', theme.button.secondaryOutline.active],
  ['secondaryFilled', theme.button.secondaryFilled.active],
  [
    'whiteOutline',
    {
      textColor: theme.colors.white,
      borderColor: theme.colors.tintedGray,
      bgColor: theme.colors.darkGunmetal,
    },
  ],
  [
    'whiteFilled',
    {
      textColor: theme.colors.richBlackLight,
      borderColor: theme.colors.white,
      bgColor: theme.colors.greyishWhite,
    },
  ],
  [
    'trial',
    {
      textColor: '#fff',
      borderColor:
        'linear-gradient( 45deg ,rgba(209, 79, 88, 1),rgba(54, 77, 154, 1) 40%,rgba(209, 79, 88, 1))',
      bgColor: '#0f1527',
    },
  ],
  [
    'homeBannerOrange',
    { textColor: '#fff', borderColor: '#993029', bgColor: '#FF4F44' },
  ],
  [
    'transparent',
    { textColor: '#fff', borderColor: 'transparent', bgColor: 'transparent' },
  ],
  [
    'greenFilled',
    {
      textColor: '#fff',
      borderColor:
        'linear-gradient(90deg, #BEE5C5 0%, rgba(190, 229, 197, 0) 52.6%, #BEE5C5 100%)',
      bgColor:
        'linear-gradient(90deg, #2F6A2E 2.02%, #469944 52.54%, #30692E 100%)',
    },
  ],
  [
    'orangeGradient',
    {
      textColor: theme.colors.maastrichtBlue,
      borderColor: theme.colors.ferrariRed,
      bgColor: theme.gradients.buttonBg,
    },
  ],
]);

const ButtonSizeVariant = new Map([
  ['small', { paddingInline: '16px', paddingBlock: '10px', fontSize: '12px' }],
  ['medium', { paddingInline: '24px', paddingBlock: '14px', fontSize: '14px' }],
  ['large', { paddingInline: '30px', paddingBlock: '13px', fontSize: '16px' }],
  [
    'homeBanner',
    { paddingInline: '24px', paddingBlock: '15px', fontSize: '12px' },
  ],
]);

const DisableButtonColorVariant = new Map([
  ['primaryOutline', theme.button.primaryOutline.disabled],
  ['primaryFilled', theme.button.primaryFilled.disabled],
  ['secondaryOutline', theme.button.secondaryOutline.disabled],
  ['secondaryFilled', theme.button.secondaryFilled.disabled],
  [
    'whiteOutline',
    { textColor: '#666', borderColor: '#33363b', bgColor: '#1D2228' },
  ],
  [
    'whiteFilled',
    { textColor: '#686B70', borderColor: 'transparent', bgColor: '#9B9D9F' },
  ],
  [
    'transparent',
    {
      textColor: '#ffffff99',
      borderColor: 'transparent',
      bgColor: 'transparent',
    },
  ],
  [
    'greenFilled',
    {
      textColor: '#fff',
      borderColor:
        'linear-gradient(90deg, #BEE5C5 0%, rgba(190, 229, 197, 0) 52.6%, #BEE5C5 100%)',
      bgColor:
        'linear-gradient(90deg, #2F6A2E 2.02%, #469944 52.54%, #30692E 100%)',
    },
  ],
  [
    'orangeGradient',
    {
      textColor: '#7F7F7F',
      borderColor: '#BEBEBE',
      bgColor: '#ECECEC',
    },
  ],
]);

const LoaderVariants = new Map([
  ['primaryOutline', theme.button.loader.white],
  ['primaryFilled', theme.button.loader.dynamicWB],
  ['secondaryOutline', theme.button.loader.white],
  ['secondaryFilled', theme.button.loader.black],
  ['whiteOutline', theme.button.loader.white],
  ['whiteFilled', theme.button.loader.black],
  ['transparent', theme.button.loader.white],
  ['orangeGradient', theme.button.success.white],
]);

const SuccessVariants = new Map([
  ['primaryOutline', theme.button.success.white],
  ['primaryFilled', theme.button.success.dynamicWB],
  ['secondaryOutline', theme.button.success.white],
  ['secondaryFilled', theme.button.success.black],
  ['whiteOutline', theme.button.success.white],
  ['whiteFilled', theme.button.success.black],
  ['transparent', theme.button.success.white],
  ['orangeGradient', theme.button.success.white],
]);

export type ButtonColorVariants =
  | 'primaryOutline'
  | 'primaryFilled'
  | 'secondaryOutline'
  | 'secondaryFilled'
  | 'whiteOutline'
  | 'whiteFilled'
  | 'transparent'
  | 'trial'
  | 'homeBannerOrange'
  | 'greenFilled'
  | 'orangeGradient';

export type ButtonSizeVariants = 'small' | 'medium' | 'large' | 'homeBanner';

export type animatedIcon = { icon: string; width: string; height: string };

export type ButtonVariants = 'underline' | 'dynamic' | 'custom';

interface ButtonProps {
  name?: string;
  onClick?(event: React.MouseEvent): void;
  disabled?: boolean;
  loading?: boolean;
  success?: boolean;
  variant?: ButtonVariants; // pass 'dynamic' for new buttons
  as?: React.ElementType;
  href?: string;
  target?: string;
  children?: React.ReactNode;
  primaryHighlightColor?: string;
  leftIcon?: JSX.Element; // ideal width="25px" height="15px"
  rightIcon?: animatedIcon | JSX.Element; // for animation pass as animate(<IconComponent/>,width,height) | height,width are optional ,default is 15px | height/width as props to IconComponent won't work
  fontSize?: string;
  width?: string; // pass 100% for full-width (make sure the button's parent have full-width too)
  height?: string;
  borderWidth?: string;
  borderColor?: string;
  borderRadius?: string;
  bgColor?: string;
  colorVariant?: ButtonColorVariants; // define color variant
  primaryEdges?: boolean; // to add extra borders over the indented corners
  primaryEdgeColor?: string; // define color for primaryEdges
  cornerIndentation?: string; // set value of indentation (ideal value => 60% of your font-size )
  sizeVariant?: ButtonSizeVariants;
  px?: string;
  py?: string;

  arrowHeight?: string;
  arrowWidth?: string;
  color?: string;
  arrowColor?: string;
  loaderColor?: string;
}

const Button: React.FunctionComponent<CustomButtomProps & ButtonProps> = ({
  name,
  onClick,
  disabled = false,
  loading = false,
  success = false,
  arrowHeight = '8',
  arrowWidth = '14',
  loaderColor = 'black',
  children,
  leftIcon,
  rightIcon,
  borderColor,
  bgColor,
  arrowColor,
  primaryHighlightColor,
  borderWidth,
  primaryEdges = false,
  primaryEdgeColor = '#fff',
  cornerIndentation = '10px',
  variant,
  fontSize = '12px',
  width = 'fit-content',
  // height,
  color,
  colorVariant,
  sizeVariant,
  px,
  py,
  borderRadius = '0px',
  ...rest
}) => {
  // animate or not
  let isRightIconAnimated = false;
  if (rightIcon) {
    if (isValidElement(rightIcon)) isRightIconAnimated = false;
    else isRightIconAnimated = true;
  }

  // color variant
  if (!colorVariant)
    colorVariant = variant === 'dynamic' ? 'primaryFilled' : 'transparent';
  const activeButtonColorVariant = {
    ...(ActiveButtonColorVariants.get(colorVariant) ||
      ActiveButtonColorVariants.get('primaryFilled')),
    ...(borderColor && { borderColor }),
    ...(bgColor && { bgColor }),
    ...(color && { textColor: color }),
  };
  const disabledButtonColorVariant =
    DisableButtonColorVariant.get(colorVariant);
  const currentButtonColorVariant = disabled
    ? disabledButtonColorVariant
    : activeButtonColorVariant;

  // setting border width
  let borderWidthValue = '';
  if (!borderWidth) {
    borderWidthValue =
      colorVariant === 'primaryFilled' || colorVariant === 'homeBannerOrange'
        ? '2.5px'
        : '1px';
  } else borderWidthValue = borderWidth?.toString();

  // setting size of button
  const fontSizeValue = parseInt(fontSize);
  if (!sizeVariant) {
    if (fontSizeValue >= 16) {
      sizeVariant = 'large';
    } else if (fontSizeValue <= 12) sizeVariant = 'small';
    else sizeVariant = 'medium';
  }

  // setting primary edges
  let primaryEdgeVales = { edge: 0, color: 'transparent' };
  if (primaryEdges) {
    primaryEdgeVales = {
      edge: parseInt(cornerIndentation) + 10,
      color: primaryEdgeColor,
    };
  }

  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <ButtonAnimationWrapper
      onPointerDown={() => !disabled && setButtonPressed(true)}
      onPointerUp={() => setButtonPressed(false)}
      isButtonPressed={buttonPressed}
    >
      <ButtonContainer
        flexDirection={'column'}
        width={width}
        isDisabled={disabled}
        minWidth="fit-content"
        height={'fit-content'}
        onClick={(e) =>
          !disabled && !success && !loading && onClick && onClick(e)
        }
        cursor={!disabled && !success && !loading ? 'pointer' : 'not-allowed'}
        {...rest}
        position="relative"
        padding={0}
        borderRadius={borderRadius}
      >
        <ButtonFallback bgColor={currentButtonColorVariant?.bgColor} />
        <ButtonWrapper
          $borderRadius={borderRadius}
          $borderColor={currentButtonColorVariant?.borderColor}
          $backgroundColor={currentButtonColorVariant?.bgColor}
          $borderWidth={borderWidthValue}
          cornerIndentation={
            variant === 'dynamic' && colorVariant !== 'transparent'
              ? cornerIndentation
              : '0px'
          }
        >
          <ButtonInnerWrapper
            as="span"
            type={'submit'}
            disabled={disabled}
            arrowHeight={arrowHeight}
            arrowWidth={arrowWidth}
            loaderColor={loaderColor}
            arrowColor={arrowColor}
            $loading={loading}
            success={success}
            variant={variant}
            paddingBlock={
              py ||
              (variant === 'dynamic'
                ? ButtonSizeVariant.get(sizeVariant)?.paddingBlock
                : '5px')
            }
            paddingInline={
              px ||
              (variant === 'dynamic'
                ? ButtonSizeVariant.get(sizeVariant)?.paddingInline
                : '0px')
            }
            primaryHighlightColor={primaryHighlightColor}
            $borderColor={currentButtonColorVariant?.borderColor}
            $backgroundColor={currentButtonColorVariant?.bgColor}
            $borderWidth={borderWidthValue}
            cornerIndentation={cornerIndentation}
            textColor={currentButtonColorVariant?.textColor}
            rightIcon={
              rightIcon
                ? isRightIconAnimated
                  ? (rightIcon as animatedIcon).icon
                  : ''
                : undefined
            }
            rightIconWidth={
              rightIcon
                ? isRightIconAnimated
                  ? (rightIcon as animatedIcon).width
                  : '0px'
                : '0px'
            }
            {...rest}
            margin={0}
            lineHeight={fontSize}
          >
            <FlexBox
              as="span"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              height="100%"
              position={'relative'}
              zIndex={2}
            >
              {loading && (
                <FlexBox position={'absolute'} left={`calc(50% - 50px)`}>
                  <Image
                    src={
                      LoaderVariants.get(colorVariant) ||
                      theme.button.loader.white
                    }
                    width="100px"
                    height="100px"
                    alt="loader"
                  />
                </FlexBox>
              )}
              {success && (
                <FlexBox position={'absolute'} left={`calc(50% - 50px)`}>
                  <Image
                    src={
                      SuccessVariants.get(colorVariant) ||
                      theme.button.success.black
                    }
                    width="100px"
                    height="100px"
                    alt="loader animation"
                  />
                </FlexBox>
              )}

              <ButtonContentWrapper
                hide={success || loading}
                fontSize={fontSize}
                alignItems="center"
                letterSpacing={theme.letterSpacings.primary}
              >
                {leftIcon && <FlexBox mr="4px">{leftIcon}</FlexBox>}

                {name ? colorHighlightWords(name) : children}
                {rightIcon && !isRightIconAnimated && !disabled && (
                  <FlexBox ml="4px">{rightIcon as JSX.Element}</FlexBox>
                )}
              </ButtonContentWrapper>
            </FlexBox>
          </ButtonInnerWrapper>
        </ButtonWrapper>
        <PrimaryEdgeWrapper position={'absolute'} top={0} left={0}>
          {primaryEdges && (
            <>
              <PrimaryEdge
                size={`${primaryEdgeVales.edge}px`}
                bottom="-2px"
                left="-2px"
                cornerIndentation={cornerIndentation}
                color={primaryEdgeVales.color}
                angle={45}
              ></PrimaryEdge>

              <PrimaryEdge
                size={`${primaryEdgeVales.edge}px`}
                top="-2px"
                right="-2px"
                cornerIndentation={cornerIndentation}
                color={primaryEdgeVales.color}
                angle={225}
              ></PrimaryEdge>
            </>
          )}
        </PrimaryEdgeWrapper>
      </ButtonContainer>
    </ButtonAnimationWrapper>
  );
};

export default Button;
