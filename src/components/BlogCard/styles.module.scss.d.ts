export type Styles = {
  author: string;
  author__meta: string;
  author__name: string;
  Block: string;
  content: string;
  description: string;
  image: string;
  tagList: string;
  time: string;
  title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
