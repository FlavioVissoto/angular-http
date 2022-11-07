export interface EventsRequest {
  FormEvents: EventsComponents[];
  KeyboardEvents: EventsComponents[];
  MouseEvents: EventsComponents[];
  ClipboardEvents: EventsComponents[];
  DragEvents: EventsComponents[];
}
export interface EventsComponents {
  name: string;
  trigger: string;
  return: string;
}
