import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { CodeViewerComponent } from './code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemsComponent } from './navbar/navbar-items/navbar-items.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TooltipModule } from '@vissoto-angular-toolkit/ui';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, NavbarItemsComponent, ExampleViewerComponent, CodeViewerComponent],
  exports: [SidebarComponent, NavbarComponent, ExampleViewerComponent, CodeViewerComponent],
  imports: [CommonModule, TooltipModule, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharingComponentsModule {}
