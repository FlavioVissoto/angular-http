import { NgModule } from '@angular/core';
import { UiComponent } from './ui.component';
import { ButtonComponent } from './button/button.component';
import { TabComponent } from './tab/tab.component';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [
    UiComponent,
    ButtonComponent,
    TabComponent,
    CardComponent
  ],
  imports: [
  ],
  exports: [
    UiComponent
  ]
})
export class UiModule { }
