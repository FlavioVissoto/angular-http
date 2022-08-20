import { RouterModule, Routes } from '@angular/router';

import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipIconsComponent } from './tooltip-icons/tooltip-icons.component';
import { UiComponent } from './ui.component';

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
  {
    path: 'ui/card',
    component: CardComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIRoutingModule {}
