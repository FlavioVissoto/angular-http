import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { ComponentsRoutingModule } from './components-routing.module';
import { NgModule } from '@angular/core';
import { UiComponent } from './ui/ui.component';
import { TooltipComponent } from './ui/tooltip/tooltip.component';

@NgModule({
  declarations: [ComponentsComponent, UiComponent, TooltipComponent],
  imports: [CommonModule, ComponentsRoutingModule],
})
export class ComponentsModule {}
