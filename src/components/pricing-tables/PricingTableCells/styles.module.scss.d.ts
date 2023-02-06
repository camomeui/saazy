export type Styles = {
  Block: string;
  check: string;
  featureCell: string;
  featureListTh: string;
  planCell: string;
  planCell__name: string;
  planCell__pricePeriod: string;
  planCell__priceValue: string;
  section: string;
  topHeader: string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
