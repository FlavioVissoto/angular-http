import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TooltipComponent } from './ui/tooltip/tooltip.component';
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
