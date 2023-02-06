export type Styles = {
  "--lg": string;
  "--md": string;
  "--sm": string;
  "--xs": string;
  arrow: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
