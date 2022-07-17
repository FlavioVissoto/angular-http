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
      return import('./modules/home/home-routing.module').then(
        (m) => m.HomeRoutingModule
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
