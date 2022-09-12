import { ButtonModule, CardAlfaModule, TooltipModule } from '@vissoto-angular-toolkit/ui';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';

import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { SanitizeHtmlPipe } from 'src/app/pipes/sanitize.pipe';
import { SharingComponentsModule } from 'src/app/components/components.module';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipIconsComponent } from './tooltip-icons/tooltip-icons.component';
import { UIRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';

@NgModule({
  declarations: [UiComponent, TooltipComponent, TooltipIconsComponent, CardComponent, ButtonComponent],
  providers: [SanitizeHtmlPipe],
  imports: [CommonModule, UIRoutingModule, SharingComponentsModule, TooltipModule, CardAlfaModule, ButtonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class UIModule {}
