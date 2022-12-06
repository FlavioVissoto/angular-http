export interface Day {
  year: number;
  month: number;
  text: string;
  day: number;
  cssClass: string;
  prev?: boolean;
  next?: boolean;
}
