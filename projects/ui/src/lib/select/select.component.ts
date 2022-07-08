import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vat-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
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
