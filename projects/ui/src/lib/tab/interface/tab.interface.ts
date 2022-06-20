import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export interface Tab {
  id?: string;
  text: string;
  selected: boolean;
  icon?: IconDefinition;
}
