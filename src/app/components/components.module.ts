import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, NavbarComponent],
  exports: [SidebarComponent, NavbarComponent],
  imports: [CommonModule],
})
export class ComponentsModule {}
