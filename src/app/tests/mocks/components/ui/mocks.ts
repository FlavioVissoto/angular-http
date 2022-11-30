import { AttributesItem } from '../../../../interfaces/components/attributes.interface';
import { CheckboxRequest } from '../../../../interfaces/components/ui/checkbox.request.interface';
import { CodeViewer } from '../../../../components/code-viewer/interfaces/code-viewer.interface';
import { EventsRequest } from '../../../../interfaces/components/events.interface';
import { InputTextRequest } from '../../../../interfaces/components/ui/input-text.request.interface';
import { Language } from '../../../../components/code-viewer/interfaces/languages.enum';
import { ModalRequest } from '../../../../interfaces/components/ui/modal.request.interface';
import { RequestDefault } from '../../../../interfaces/request/request.interface';

export const mockCheckboxRequest = {
  data: {
    codeModule: {
      code: 'codigo',
      language: Language.TypeScript,
    },
    codeSimples: {
      code: 'codigo',
      language: Language.TypeScript,
    },
    codeChecked: {
      code: 'codigo',
      language: Language.TypeScript,
    },
    codeDisabled: {
      code: 'codigo',
      language: Language.TypeScript,
    },
    codeHelperText: {
      code: 'codigo',
      language: Language.TypeScript,
    },
    codeControlForm: {
      code: 'codigo',
      language: Language.TypeScript,
    },
    events: [
      {
        name: 'nome evento',
        trigger: 'trigger evento',
        return: 'return evento',
      },
    ],
  },
} as RequestDefault<CheckboxRequest>;

export const mockEventsRequest = {
  data: {
    FormEvents: [
      {
        name: '',
        return: '',
        trigger: '',
      },
    ],
    KeyboardEvents: [
      {
        name: '',
        return: '',
        trigger: '',
      },
    ],
    MouseEvents: [
      {
        name: '',
        return: '',
        trigger: '',
      },
    ],
    ClipboardEvents: [
      {
        name: '',
        return: '',
        trigger: '',
      },
    ],
    DragEvents: [
      {
        name: '',
        return: '',
        trigger: '',
      },
    ],
    CustomEvents: [
      {
        name: '',
        return: '',
        trigger: '',
      },
    ],
  },
} as RequestDefault<EventsRequest>;

export const mockInputTextRequest = {
  data: {
    rounded: {
      code: 'rounded',
      language: Language.TypeScript,
    },
  },
} as RequestDefault<InputTextRequest>;

export const mockModalRequest = {
  data: {
    rounded: {
      code: 'rounded',
      language: Language.TypeScript,
    },
  },
} as RequestDefault<ModalRequest>;

export const mockEnumSize = {
  data: {
    code: 'codigo',
    language: Language.TypeScript,
  } as CodeViewer,
} as RequestDefault<CodeViewer>;

export const mockAttributesHTML = {
  data: [
    {
      description: 'abc',
      name: 'placeholder',
      typeEntry: 'string',
    },
    {
      description: 'abc',
      name: 'required',
      typeEntry: 'string',
    },
    {
      description: 'abc',
      name: 'name',
      typeEntry: 'string',
    },
    {
      description: 'abc',
      name: 'max',
      typeEntry: 'string',
    },
  ],
} as RequestDefault<AttributesItem[]>;
