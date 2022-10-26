import { ButtonModule, CardAlfaModule, SelectModule, TabModule, TooltipModule } from '@vissoto-angular/ui';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { NumberStepperComponent } from './number-stepper/number-stepper.component';
import { SanitizeHtmlPipe } from 'src/app/pipes/sanitize.pipe';
import { SelectComponent } from './select/select.component';
import { SharingComponentsModule } from 'src/app/components/components.module';
import { TabComponent } from './tab/tab.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipIconsComponent } from './tooltip-icons/tooltip-icons.component';
import { UIRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';

@NgModule({
  declarations: [
    UiComponent,
    TooltipComponent,
    TooltipIconsComponent,
    CardComponent,
    ButtonComponent,
    SelectComponent,
    TabComponent,
    NumberStepperComponent,
  ],
  providers: [SanitizeHtmlPipe],
  imports: [CommonModule, UIRoutingModule, SharingComponentsModule, TooltipModule, CardAlfaModule, ButtonModule, SelectModule, TabModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UIModule {}
