export type Styles = {
  Block: string;
  footer: string;
  or: string;
  social: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
