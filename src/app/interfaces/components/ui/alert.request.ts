import { AttributesItem } from '../attributes.interface';
import { CodeViewer } from '../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsComponents } from '../events.interface';

export interface AlertRequest {
  codeModule: CodeViewer;
  events: EventsComponents[];
  timer: CodeViewer;
  color: CodeViewer;
  colorOptions: CodeViewer;
  show: CodeViewer;
  template: CodeViewer;
  autoClose: CodeViewer;
  labelButtonClose: CodeViewer;

  attributes: string[];
  attributesHTML: AttributesItem[];
}
