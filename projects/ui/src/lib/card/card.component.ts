import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Card } from './interfaces/iui-card.interface';
import { Image } from '../interface/image';

@Component({
  selector: 'iui-card',
  templateUrl: './iui-card.component.html',
  styleUrls: ['./../../assets/css/tailwind.scss', './../../assets/css/tailwind-custom.scss', './iui-card.component.scss'],
})
export class IonUICardComponent implements OnInit {
  @Input() card: Card;
  @Input() title: string;
  @Input() message: string;
  @Input() messageFooter: string;
  @Input() image: Image;

  @Input() disabled = false;
  @Input() loading = false;

  @Output() clickedButton = new EventEmitter();

  ngOnInit(): void {
    if (!this.card) {
      this.card = {
        image: this.image,
        title: this.title,
        message: this.message,
        messageFooter: this.messageFooter,
      } as Card;
    }
  }

  clickCard(): void {
    if (this.loading || this.disabled) {
      return;
    }
    this.clickedButton.emit(true);
  }
}
