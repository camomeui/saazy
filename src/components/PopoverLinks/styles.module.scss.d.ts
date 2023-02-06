export type Styles = {
  button: string;
  link: string;
  linkList: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
