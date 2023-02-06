export type Styles = {
  active: string;
  Block: string;
  indent: string;
  item: string;
  list: string;
  title: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
