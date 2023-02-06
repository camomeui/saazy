export type Styles = {
  button: string;
  category: string;
  isActive: string;
  list: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
