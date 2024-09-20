import FlexBox, { FLexBoxProps } from 'components/FlexBox';
import TextField from 'components/TextField';
import {
  TextProps,
  TextWrapperType,
} from 'components/TextField/TextField.styles';
import { Description, ParagraphNodeType, Text } from 'interfaces';
import { Fragment } from 'react';
import theme from 'theme';

const TextNode: React.FunctionComponent<{
  text: Text;
  textStyles: TextProps & TextWrapperType;
}> = ({ text, textStyles }) => {
  const textDecorators: Array<string> = [];
  if (!text.value) return <br />;

  if (text?.marks?.length) {
    text.marks.forEach((mark) => textDecorators.push(mark.type));
  }

  return (
    <TextField
      {...textStyles}
      fontWeight={textDecorators.includes('bold') ? 600 : textStyles.fontWeight}
      fontStyle={
        textDecorators.includes('italic') ? 'italic' : textStyles.fontStyle
      }
      textDecoration={
        textDecorators.includes('underline')
          ? 'underline'
          : textStyles.textDecoration
      }
      content={text?.value}
    />
  );
};

const Paragraph: React.FunctionComponent<{
  paragraph: ParagraphNodeType;
  textStyles: TextProps & TextWrapperType;
}> = ({ paragraph, textStyles }) => {
  if (paragraph.nodeType === 'text') {
    return <TextNode textStyles={textStyles} text={paragraph} />;
  } else {
    return (
      <TextField
        {...textStyles}
        as="a"
        href={paragraph?.data?.uri}
        primaryHighlightColor={theme.colors.mint}
        textDecoration="underline"
        content={`**${paragraph?.content[0]?.value}**`}
      />
    );
  }
};

const ParagraphNode: React.FunctionComponent<{
  descriptionContent: ParagraphNodeType[];
  textStyles: TextProps & TextWrapperType;
  paragraphWrapperStyles?: FLexBoxProps;
}> = ({ descriptionContent, textStyles, paragraphWrapperStyles }) => {
  return (
    <FlexBox
      textAlign={textStyles.textAlign ? textStyles.textAlign : 'inherit'}
      {...paragraphWrapperStyles}
    >
      <span>
        {descriptionContent.map((item, i) => {
          return (
            <Paragraph
              key={`text${i}`}
              textStyles={textStyles}
              paragraph={item}
            />
          );
        })}
      </span>
    </FlexBox>
  );
};

const ListItemText: React.FunctionComponent<{
  descriptionContent: ParagraphNodeType[];
  bulletStyles: FLexBoxProps;
  textStyles: TextProps & TextWrapperType;
}> = ({ descriptionContent, textStyles, bulletStyles }) => {
  return (
    <FlexBox>
      {descriptionContent.map((item, i) => (
        <Fragment key={`content${i}`}>
          <FlexBox {...bulletStyles} />
          <Paragraph
            key={`text${i}`}
            textStyles={textStyles}
            paragraph={item}
          />
        </Fragment>
      ))}
    </FlexBox>
  );
};

const DescriptionField: React.FunctionComponent<{
  description: Description;
  paragraphStyles?: TextProps & TextWrapperType;
  paragraphWrapperStyles?: FLexBoxProps;
  heading1Styles?: TextProps & TextWrapperType;
  listItemStyles?: TextProps & TextWrapperType;
  bulletStyles?: FLexBoxProps;
  listItemWrapperStyles?: FLexBoxProps;
}> = ({
  description,
  paragraphStyles,
  paragraphWrapperStyles,
  heading1Styles,
  listItemStyles,
  bulletStyles,
  listItemWrapperStyles,
}) => {
  return (
    <FlexBox flexDirection={'column'}>
      {description?.content.map((content, i) => {
        if (content?.nodeType === 'heading-1') {
          return (
            <ParagraphNode
              key={`heading${i}`}
              textStyles={heading1Styles || {}}
              descriptionContent={content?.content}
            />
          );
        }
        if (content?.nodeType === 'unordered-list') {
          return content?.content.map((listItem, listIndex) => {
            return listItem.content.map((p, i) => (
              <FlexBox {...listItemWrapperStyles} key={`node${i}`}>
                <ListItemText
                  key={`unordered_list${listIndex}`}
                  textStyles={listItemStyles || {}}
                  bulletStyles={bulletStyles || {}}
                  descriptionContent={p.content}
                />
              </FlexBox>
            ));
          });
        }
        return (
          <ParagraphNode
            key={`paragraph${i}`}
            textStyles={paragraphStyles || {}}
            descriptionContent={content?.content}
            paragraphWrapperStyles={paragraphWrapperStyles}
          />
        );
      })}
    </FlexBox>
  );
};

export default DescriptionField;
