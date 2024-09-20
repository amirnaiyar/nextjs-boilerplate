import { FunctionComponent, useRef, useState } from 'react';
import FlexBox from 'components/FlexBox';
import Modal from 'components/Modal';
import {
  VideoBoxWrapper,
  VideoStreamsWrapper,
  WatchText,
} from './index.styles';
import Image from 'components/Image';
import VideoPlayIcon from 'assets/svg/VideoPlayIcon';

const VideoStreams: FunctionComponent<{
  videoBanner: string;
  videoUrl: string;
}> = ({ videoBanner, videoUrl }) => {
  const [playVideo, setPlayVideo] = useState('');
  const myRef = useRef<HTMLElement>(null);

  return (
    <>
      {playVideo !== '' && (
        <Modal
          visible={true}
          showCloseIcon={true}
          background={'transparent'}
          onClick={() => setPlayVideo('')}
          isOutsideClick={true}
          showTill={2921}
          variant={'fullScreenVideo'}
          noPadding={true}
          disableBorderRadius={true}
        >
          <video
            width={'100%'}
            height={'100%'}
            controls
            autoPlay={true}
            className={'video-mask'}
          >
            <source src={playVideo} type="video/mp4" />
          </video>
        </Modal>
      )}

      <FlexBox ref={myRef} flexDirection="column" marginY={'20px'}>
        <VideoBoxWrapper>
          <WatchText>Watch this video to know more</WatchText>
        </VideoBoxWrapper>
        <VideoStreamsWrapper
          onClick={() => {
            setPlayVideo(videoUrl);
          }}
        >
          <FlexBox position={'absolute'}>
            <VideoPlayIcon />
          </FlexBox>
          <Image
            src={videoBanner}
            width={'340px'}
            height={'220px'}
            name={'video-banner-info'}
            alt={'video-banner-info'}
          />
        </VideoStreamsWrapper>
      </FlexBox>
    </>
  );
};

export default VideoStreams;
