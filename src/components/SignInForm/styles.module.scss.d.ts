export type Styles = {
  Block: string;
  footer: string;
  or: string;
  social: string;
  sub: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
