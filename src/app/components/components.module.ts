import { CheckboxComponent } from './checkbox/checkbox.component';
import { CodeViewerComponent } from './code-viewer/code-viewer.component';
import { CommonModule } from '@angular/common';
import { ExampleViewerComponent } from './example-viewer/example-viewer.component';
import { FooterComponent } from './footer/footer.component';
import { InfoComponent } from './sidebar/info/info.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TooltipModule } from '@vissoto-angular/ui';

@NgModule({
  declarations: [
    SidebarComponent,
    NavbarComponent,
    ExampleViewerComponent,
    CodeViewerComponent,
    FooterComponent,
    InfoComponent,
    CheckboxComponent,
  ],
  exports: [SidebarComponent, NavbarComponent, ExampleViewerComponent, CodeViewerComponent, FooterComponent],
  imports: [CommonModule, TooltipModule, RouterModule],
})
export class SharingComponentsModule {}
