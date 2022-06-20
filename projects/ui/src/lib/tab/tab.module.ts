import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IonUITabComponent } from './iui-tab.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [IonUITabComponent],
  exports: [IonUITabComponent],
  imports: [CommonModule, FontAwesomeModule],
})
export class IonUITabModule {}
