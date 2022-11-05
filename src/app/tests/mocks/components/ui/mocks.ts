import { CheckboxRequest } from '../../../../interfaces/components/ui/checkbox/checkbox-request.interface';
import { Language } from '../../../../components/code-viewer/interfaces/languages.enum';
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
