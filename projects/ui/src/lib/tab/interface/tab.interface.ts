import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface IonUITab {
  id?: string;
  text: string;
  selected: boolean;
  icon?: IconDefinition;
}
