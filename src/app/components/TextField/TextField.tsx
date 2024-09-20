import { TextWrapper, TextWrapperType, TextProps } from './TextField.styles';
import { theme } from 'theme';

export const TextStyleProps: {
  [key: string]: {
    fontSize: (string | null)[];
    fontWeight: (string | null)[];
    lineHeight: (string | null)[];
  };
} = {
  h1: {
    fontSize: ['40px', null, null, '42.69px', '45px', '60px'],
    fontWeight: ['800'],
    lineHeight: ['48.76px', null, null, '52.04px', '54px', '73px'],
  },
  h2: {
    fontSize: ['30px', null, '40px', null, null, null, '50px'],
    fontWeight: ['700'],
    lineHeight: ['36px', null, '50px', null, null, null, '63px'],
  },
  h3: {
    fontSize: ['24px', null, null, '21.34px', '22.5px', '30px'],
    fontWeight: ['600'],
    lineHeight: ['29px', null, null, '26.02px', '27.43px', '36.57px'],
  },
  h4: {
    fontSize: ['14px', null, '18px', null, '24px'],
    fontWeight: ['600'],
    lineHeight: ['18px', null, '22px', null, '29px'],
  },
  h5: {
    fontSize: ['12px', null, '16px', null, '20px'],
    fontWeight: ['600'],
    lineHeight: ['16px', null, '20px', null, '22px'],
  },
  p: {
    fontSize: ['14px', null, null, '14.23px', '15px', '20px'],
    fontWeight: ['500'],
    lineHeight: ['17.07px', null, null, '17.35px', '18.28px', '24.38px'],
  },
  span: {
    fontSize: ['14px', null, null, '20px'],
    fontWeight: ['500'],
    lineHeight: ['17px', null, null, '24px'],
  },
};

const highlightWords = (text: string) => {
  return text.split('*').map((t, i) =>
    i % 2 !== 0 ? (
      <span key={`text${i}`} className="highlight-text">
        {t}
      </span>
    ) : (
      t
    )
  );
};

const colorHighlightWords = (text: string, isPlainText?: boolean) => {
  return isPlainText
    ? text
    : text.split('**').map((t, i) =>
        i % 2 !== 0 ? (
          <span key={`text${i}`} className="color-highlight-text">
            {t}
          </span>
        ) : (
          highlightWords(t)
        )
      );
};

const TextField: React.FunctionComponent<
  {
    cursor?: string;
    content?: string;
    isPlainText?: boolean;
    highlightedBackground?: string;
    highlightedBorder?: string;
    children?: React.ReactNode;
    html?: string;
  } & TextProps &
    TextWrapperType
> = ({
  children,
  as = 'span',
  textTransform,
  textDecoration,
  textDecorationColor,
  cursor,
  content = '',
  isPlainText = false,
  whiteSpace = 'unset',
  highlightColor,
  highlightedBackground,
  highlightedBorder,
  html, // Note =>  dangerously set html to render static Page Data
  ...rest
}) => {
  const color = theme.colors.white || ('white' as string);
  const textProps = TextStyleProps[as] || { fontSize: [0, 1, 3, 4] };

  return (
    <TextWrapper
      textTransform={textTransform}
      textDecoration={textDecoration}
      whiteSpace={whiteSpace}
      textDecorationColor={textDecorationColor}
      highlightColor={highlightColor}
      color={color}
      cursor={cursor}
      highlightedBackground={highlightedBackground}
      highlightedBorder={highlightedBorder}
      pb="5px"
      as={as}
      dangerouslySetInnerHTML={
        html
          ? {
              __html: html,
            }
          : undefined
      }
      {...textProps}
      {...rest}
    >
      {html
        ? null
        : children
          ? typeof children === 'string'
            ? colorHighlightWords(children, isPlainText)
            : children
          : colorHighlightWords(content, isPlainText)}
    </TextWrapper>
  );
};

export { colorHighlightWords };

export default TextField;
