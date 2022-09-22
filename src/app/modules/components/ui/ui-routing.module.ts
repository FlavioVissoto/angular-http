import { RouterModule, Routes } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { SelectComponent } from './select/select.component';
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
  {
    path: 'ui/button',
    component: ButtonComponent,
  },
  {
    path: 'ui/select',
    component: SelectComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIRoutingModule {}
