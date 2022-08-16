import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TooltipComponent } from './ui/tooltip/tooltip.component';
import { TooltipIconsComponent } from './ui/tooltip-icons/tooltip-icons.component';
import { UiComponent } from './ui/ui.component';

const routes: Routes = [
  {
    path: 'ui',
    component: UiComponent,
  },
  {
    path: 'ui/tooltip',
    component: TooltipComponent,
  },
  {
    path: 'ui/tooltip-icons',
    component: TooltipIconsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
