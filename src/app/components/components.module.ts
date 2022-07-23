import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TooltipModule } from '@vissoto-angular-toolkit/ui';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent],
  exports: [SidebarComponent, NavbarComponent],
  imports: [CommonModule, TooltipModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ComponentsModule {}
