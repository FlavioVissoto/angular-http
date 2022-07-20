import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TooltipModule } from '@vissoto-angular-toolkit/ui';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, NavbarComponent],
  exports: [SidebarComponent, NavbarComponent],
  imports: [CommonModule, TooltipModule],
})
export class ComponentsModule {}
