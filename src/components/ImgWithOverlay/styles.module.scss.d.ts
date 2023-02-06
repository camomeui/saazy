export type Styles = {
  Block: string;
  img: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
