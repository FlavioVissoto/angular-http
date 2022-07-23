import { RouterModule, Routes } from '@angular/router';

import { NavbarServices } from './services/navbar.services';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () => {
      return import('./modules/home/home.module').then((m) => m.HomeModule);
    },
  },
  {
    path: 'components',
    loadChildren: () => {
      return import('./modules/components/components.module').then(
        (m) => m.ComponentsModule
      );
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [NavbarServices],
  exports: [RouterModule],
})
export class AppRoutingModule {}
