import { AttributesItem } from '../attributes.interface';
import { CodeViewer } from '../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsComponents } from '../events.interface';

export interface CalendarRequest {
  codeModule: CodeViewer;
  events: EventsComponents[];

  theme: CodeViewer;

  attributes: string[];
  attributesHTML: AttributesItem[];
}
