import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { NgModule } from '@angular/core';
import { SanitizeHtmlPipe } from 'src/app/pipes/sanitize.pipe';
import { SharingComponentsModule } from 'src/app/components/components.module';
import { TooltipComponent } from './ui/tooltip/tooltip.component';
import { TooltipModule } from '@vissoto-angular-toolkit/ui';
import { UiComponent } from './ui/ui.component';

@NgModule({
  declarations: [ComponentsComponent, UiComponent, TooltipComponent],
  providers: [SanitizeHtmlPipe],
  imports: [CommonModule, ComponentsRoutingModule, SharingComponentsModule, TooltipModule],
})
export class ComponentsModule {}
