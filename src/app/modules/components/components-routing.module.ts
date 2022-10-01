import { RouterModule, Routes } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
  },
  {
    path: 'ui',
    loadChildren: () => {
      return import('./ui/ui.module').then((m) => m.UIModule);
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentsRoutingModule {}
