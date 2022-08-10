import { CodeViewer } from './../../../../components/code-viewer/interfaces/code-viewer.interface';
import { Component } from '@angular/core';
import { Language } from 'src/app/components/code-viewer/interfaces/languages.enum';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  codeModule = {
    code:
      "import { TooltipModule } from '@vissoto-angular-toolkit/ui';\n\n" +
      '\t@NgModule({\n' +
      '\t\tdeclarations: [],\n' +
      '\t\tproviders: [],\n' +
      '\t\timports: [CommonModule, ComponentsRoutingModule, TooltipModule],\n' +
      '\t})\n' +
      '\texport class ComponentsModule {}',
    language: Language.TypeScript,
  } as CodeViewer;

  codeExample = {
    code:
      '<vat-tooltip [text]="\'Tooltip Exemplo\'" [position]="0">\n' +
      '\t\t<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tooltip para cima</button>\n' +
      '\t</vat-tooltip>',
    language: Language.TypeScript,
  } as CodeViewer;

  codeText = {
    code: '<vat-tooltip [text]="\'Tooltip Exemplo\'"></vat-tooltip>',
    language: Language.TypeScript,
  } as CodeViewer;

  codePosition = {
    code: '<vat-tooltip [position]="0"></vat-tooltip>',
    language: Language.TypeScript,
  } as CodeViewer;

  codeEnum = {
    code: 'export const enum Position {\n' + '\t\ttop = 0,\n' + '\t\tright = 1,\n' + '\t\tbottom = 2,\n' + '\t\tleft = 3,\n' + '\t}',
    language: Language.TypeScript,
  } as CodeViewer;
}
