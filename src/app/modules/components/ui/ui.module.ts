import { CardAlfaModule, TooltipModule } from '@vissoto-angular-toolkit/ui';

import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SanitizeHtmlPipe } from 'src/app/pipes/sanitize.pipe';
import { SharingComponentsModule } from 'src/app/components/components.module';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipIconsComponent } from './tooltip-icons/tooltip-icons.component';
import { UIRoutingModule } from './ui-routing.module';
import { UiComponent } from './ui.component';

@NgModule({
  declarations: [UiComponent, TooltipComponent, TooltipIconsComponent, CardComponent],
  providers: [SanitizeHtmlPipe],
  imports: [CommonModule, UIRoutingModule, SharingComponentsModule, TooltipModule, CardAlfaModule],
})
export class UIModule {}
