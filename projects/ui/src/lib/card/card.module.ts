import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [CardComponent],
  imports: [CommonModule],
  exports: [CardComponent],
})
export class CardModule {}
