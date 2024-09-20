import FlexBox from 'components/FlexBox';
import TextField from 'components/TextField';
import { ThemeType, customStyled } from 'theme';

export const VideoStreamsWrapper = customStyled(FlexBox)`
    overflow: scroll;
    width: 100%;
    height: 100%;
    position: relative;
    border-radius: 8px;
    box-shadow: 0px 0px 19.1px 0px rgba(0, 0, 0, 0.12);
    align-items: center;
    justify-content: center;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar {
        display: none;
    }
`;

export const WatchText = customStyled(TextField)<{ theme?: ThemeType }>`
    font-family: ${({ theme }) => theme.fonts.primary};
    font-size: 10px !important;
    font-weight: 500 !important;
    line-height: 13px !important;
    opacity: 0.8 !important;
`;

export const VideoBoxWrapper = customStyled(FlexBox)`
    justify-items: center;
    justify-self: center;
    align-self: center;
    display: inline-flex;
    padding: 8px 16px 0px 16px;
    justify-content: center;
    align-items: center;
    border-radius: 8px 8px 0px 0px;
    border: 1px solid rgba(255, 255, 255, 0.23);
    background: linear-gradient(154deg, #8055FB -15.27%, #00388B 67.39%, #2B69C6 150.6%);
`;
