import { Description } from 'interfaces';

export interface FAQ {
  fields: { title: string; description: Description | string };
}

export type VisibleOnType = 'Logged-In' | 'Logged-Out' | 'Both' | 'None';

export type CustomTabsType = {
  label: string;
  value: Document;
};
