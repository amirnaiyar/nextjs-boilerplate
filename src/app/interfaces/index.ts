export type Browser =
  | 'edge'
  | 'opera'
  | 'chrome'
  | 'ie'
  | 'firefox'
  | 'safari'
  | 'other';

interface ListItemContent {
  data: any;
  nodeType: 'list-item';
  content: Paragraph[];
}
interface Hyperlink {
  data: any;
  nodeType: 'hyperlink';
  content: Text[];
}
export type ParagraphNodeType = Text | Hyperlink;

interface UnorderedListFormat {
  data: any;
  nodeType: 'unordered-list';
  content: ListItemContent[];
}

interface Paragraph {
  data: any;
  nodeType: 'paragraph' | 'heading-1';
  content: ParagraphNodeType[];
}

export interface Description {
  content: Paragraph[] | UnorderedListFormat[];
  nodeType: 'document';
}

export interface Text {
  data: any;
  marks: { type: string }[];
  nodeType: 'text';
  value: string;
}
