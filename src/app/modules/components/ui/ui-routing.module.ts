import { RouterModule, Routes } from '@angular/router';

import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { NgModule } from '@angular/core';
import { NumberStepperComponent } from './number-stepper/number-stepper.component';
import { SelectComponent } from './select/select.component';
import { TabComponent } from './tab/tab.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TooltipIconsComponent } from './tooltip-icons/tooltip-icons.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tooltip',
    pathMatch: 'full',
  },
  {
    path: 'tooltip',
    component: TooltipComponent,
  },
  {
    path: 'tooltip-icons',
    component: TooltipIconsComponent,
  },
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'button',
    component: ButtonComponent,
  },
  {
    path: 'select',
    component: SelectComponent,
  },
  {
    path: 'tab',
    component: TabComponent,
  },
  {
    path: 'number-stepper',
    component: NumberStepperComponent,
  },
  {
    path: 'checkbox',
    component: CheckboxComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UIRoutingModule {}
