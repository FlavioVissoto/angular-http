export interface Day {
  day: number;
  month: number;
  year: number;
  isToday?: boolean;
  text?: string;
  prev?: boolean;
  next?: boolean;
  active?: boolean;
  notification?: boolean;
  countNotifications?: string;
  selected?: boolean;
}
