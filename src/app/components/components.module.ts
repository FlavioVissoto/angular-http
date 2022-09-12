import { CodeViewerComponent } from './code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItemsComponent } from './navbar/navbar-items/navbar-items.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TooltipModule } from '@vissoto-angular-toolkit/ui';

@NgModule({
  declarations: [SidebarComponent, NavbarComponent, NavbarItemsComponent, ExampleViewerComponent, CodeViewerComponent, FooterComponent],
  exports: [SidebarComponent, NavbarComponent, ExampleViewerComponent, CodeViewerComponent, FooterComponent],
  imports: [CommonModule, TooltipModule, RouterModule],
})
export class SharingComponentsModule {}
