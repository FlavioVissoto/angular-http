import { Component, OnInit } from '@angular/core';

import { ButtonEvents } from './../../../../interfaces/components/ui/button/button-events.interface';
import { ButtonServices } from '../../../../services/components/ui/button/button-events.services';
import { CodeViewer } from '../../../../components/code-viewer/interfaces/code-viewer.interface';
import { Language } from '../../../../components/code-viewer/interfaces/languages.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  constructor(private service: ButtonServices) {}

  buttonEvents: ButtonEvents[];

  ngOnInit(): void {
    this.getButtonEvents();
  }

  private getButtonEvents(): void {
    this.service.getButtonEvents().subscribe({
      next: (x: ButtonEvents[]) => {
        this.buttonEvents = x;
      },
    });
  }

  codeModule = {
    code: `
    import { ButtonModule } from '@vissoto-angular/ui';
    
    @NgModule({
      declarations: [],
      providers: [],
      imports: [CommonModule, ComponentsRoutingModule, ButtonModule],
    })
    export class ComponentsModule { }`,
    language: Language.TypeScript,
  } as CodeViewer;

  codeSizeEnum = {
    code: `export enum Size {
        ExtraSmall = 1,
        Small,
        Base,
        Large,
        ExtraLarge,
    }`,
    language: Language.TypeScript,
  } as CodeViewer;

  codeShadowEnum = {
    code: `export enum Shadow {
        Blue = 1,
        Green,
        Cyan,
        Teal,
        Lime,
        Red,
        Pink,
        Purple,
      }`,
    language: Language.TypeScript,
  } as CodeViewer;

  codeCollorEnum = {
    code: `export enum Collor {
      Default = 1,
      Alternative,
      Dark,
      Light,
      Green,
      Red,
      Yellow,
      Purple,
    }`,
    language: Language.TypeScript,
  } as CodeViewer;

  codeCollor = {
    code: `
    <vat-button [text]="'Exemplo'" [collor]="1"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="2"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="3"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="4"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="5"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="6"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="7"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="8"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;

  codeGradientDuotoneEnum = {
    code: `export enum GradientDuotone {
      PurpleToBlue = 1,
      CyanToBlue,
      GreenToBlue,
      PurpleToPink,
      PinkToOrange,
      TealToLime,
      RedToYellow,
    }`,
    language: Language.TypeScript,
  } as CodeViewer;

  codeGradientDuotone = {
    code: `
    <vat-button [text]="'Exemplo'" [gradientDuotone]="1"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientDuotone]="2"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientDuotone]="3"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientDuotone]="4"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientDuotone]="5"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientDuotone]="6"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientDuotone]="7"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;

  codeGradientOutline = {
    code: `
    <vat-button [text]="'Exemplo'" [outline]="1"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="2"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="3"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="4"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="5"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="6"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="7"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="8"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;

  codeOutline = {
    code: `
    <vat-button [text]="'Exemplo'" [outline]="1"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="2"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="3"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="4"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="5"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="6"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="7"></vat-button>
    <vat-button [text]="'Exemplo'" [outline]="8"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;

  codeGradientMonochromeEnum = {
    code: `export enum GradientMonochrome {
      Blue = 1,
      Green,
      Cyan,
      Teal,
      Lime,
      Red,
      Pink,
      Purple,
    }`,
    language: Language.TypeScript,
  } as CodeViewer;

  codeGradientMonochrome = {
    code: `
    <vat-button [text]="'Exemplo'" [gradientMonochrome]="1"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientMonochrome]="2"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientMonochrome]="3"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientMonochrome]="4"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientMonochrome]="5"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientMonochrome]="6"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientMonochrome]="7"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientMonochrome]="8"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;

  codeSize = {
    code: `\n\t<vat-button [text]="'Exemplo'" [collor]="1" [size]="1"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="1" [size]="2"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="1" [size]="3"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="1" [size]="4"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="1" [size]="5"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;

  codeShadow = {
    code: `\n\t<vat-button [text]="'Exemplo'" [collor]="2" [shadow]="1"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="2" [shadow]="2"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="2" [shadow]="3"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="2" [shadow]="4"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="2" [shadow]="5"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="2" [shadow]="6"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="2" [shadow]="7"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="2" [shadow]="8"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;

  codeRounded = {
    code: `
    <vat-button [text]="'Exemplo'" [collor]="3" [rounded]="1"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="3" [rounded]="2"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="3" [rounded]="3"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="3" [rounded]="4"></vat-button>
    <vat-button [text]="'Exemplo'" [collor]="3" [rounded]="5"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;

  codeMensagem = {
    code: `
    <vat-button [text]="'Exemplo'" [collor]="5" [rounded]="1" [message]="'1.235.896'"></vat-button>
    <vat-button [text]="'Exemplo'" [gradientDuotone]="4" [rounded]="1" [message]="'mensagem'"></vat-button>`,
    language: Language.HTML,
  } as CodeViewer;
}
