import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { TabComponent } from './tab.component';

@NgModule({
  declarations: [TabComponent],
  exports: [TabComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class TabModule {}
