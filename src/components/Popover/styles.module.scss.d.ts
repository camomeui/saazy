export type Styles = {
  panel: string;
  panel__content: string;
  show: string;
  wrapper: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
