import { useCallback, useEffect, useRef, useState } from 'react';
import {
  ModalContainer,
  ModalClose,
  ModalContentBox,
  ModalInnerBox,
  VariantsType,
  ModalPosition,
  ModalTopLine,
} from './Modal.styles';
import FlexBox from 'components/FlexBox';
import Cross from 'assets/svg/Cross';
import useOnClickOutside from 'hooks/useClickOutSide.hooks';

interface ModalProps {
  visible?: boolean;
  showCloseIcon?: boolean;
  onClick?(
    event: React.MouseEvent<HTMLUListElement | HTMLDivElement> | MouseEvent
  ): void;
  variant?: VariantsType;
  maxWidth?: number;
  showTill?: number;
  bodyBackground?: string;
  background?: '#fff' | '#000' | '#11151C' | 'rgba(0,0,0,0)' | 'transparent';
  right?: string;
  top?: string;
  desktopTop?: string;
  desktopRight?: string;
  isOutsideClick?: boolean;
  children?: React.ReactNode;
  modalPosition?: ModalPosition;
  closeCallBackModal?: () => void;
  noPadding?: boolean;
  showTopLine?: boolean;
  crossMarkWidth?: number;
  crossMarkHeight?: number;
  disableCross?: boolean;
  disableBorderRadius?: boolean;
}

declare global {
  /* eslint-disable */
  interface Window {
    ReactNativeWebView: any;
  }
}

const Modal: React.FunctionComponent<ModalProps> = ({
  children,
  visible = false,
  showCloseIcon = true,
  onClick,
  variant,
  maxWidth,
  showTill = 1921,
  right,
  top,
  desktopTop,
  desktopRight,
  background,
  isOutsideClick = true,
  modalPosition = 'center',
  bodyBackground = 'rgba(0,0,0,0.6)',
  closeCallBackModal,
  noPadding = false,
  showTopLine = false,
  crossMarkWidth = 20,
  crossMarkHeight = 20,
  disableCross,
  disableBorderRadius,
}) => {
  const onCloseCallBack = useCallback(
    (event: React.MouseEvent<HTMLUListElement | HTMLDivElement>) => {
      if (onClick) {
        setTimeout(() => {
          onClick(event);
          closeCallBackModal && closeCallBackModal();
        }, 300);
      }
    },
    [visible]
  );

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, (event: MouseEvent) => {
    const parentElement = (event.target as HTMLDivElement)?.parentElement;

    if (isOutsideClick) {
      if (
        parentElement?.tagName === 'svg' ||
        parentElement?.className.includes('Toastify')
      ) {
        return;
      } else if (onClick) {
        setTimeout(() => {
          onClick(event);
        }, 300);
        setAnimated(false);
      }
    }
  });

  useEffect(() => {
    const body: HTMLBodyElement | null = document.querySelector('body');
    if (visible) {
      window?.scrollY === 0 && window?.scrollBy(0, 6);
      body?.classList.add('noscroll');
      setIsModalVisible(true);
      setTimeout(() => {
        setAnimated(true);
      }, 300);
    } else {
      setTimeout(() => {
        setIsModalVisible(false);
      }, 300);
      setAnimated(false);
    }
    return () => {
      // TODO:APP use ref
      setTimeout(() => {
        const modal = document.querySelector('.modal-container');
        !modal && body?.classList.remove('noscroll');
      }, 350);
    };
  }, [visible]);

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [animated, setAnimated] = useState<boolean>(false);

  if (isModalVisible) {
    return (
      <ModalContainer
        bodyBackground={bodyBackground}
        position={modalPosition}
        className={'modal-container'}
      >
        <ModalInnerBox
          background={background}
          variant={variant}
          maxWidth={maxWidth}
          showTill={showTill}
          bottom={animated ? '0px' : '-80vh'}
          noPadding={noPadding}
          disableBorderRadius={disableBorderRadius}
        >
          <ModalContentBox ref={ref} variant={variant}>
            {showTopLine && (
              <FlexBox onClick={onCloseCallBack}>
                <ModalTopLine />
              </FlexBox>
            )}
            {showCloseIcon && (
              <ModalClose
                right={right}
                top={top}
                desktopRight={desktopRight}
                desktopTop={desktopTop}
                variant={variant}
                onClick={onCloseCallBack}
                disableCross={disableCross}
              >
                <Cross
                  color="#D0D0D0"
                  width={crossMarkWidth}
                  height={crossMarkHeight}
                />
              </ModalClose>
            )}
            {children}
          </ModalContentBox>
        </ModalInnerBox>
      </ModalContainer>
    );
  } else {
    return <></>;
  }
};

export default Modal;
