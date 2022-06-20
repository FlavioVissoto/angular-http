import { Component, EventEmitter, Input, Output } from '@angular/core';

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'vat-button',
  templateUrl: './button.component.html',
  styleUrls: ['./../../assets/css/tailwind.scss'],
})
export class ButtonComponent {
  @Input() text: string;
  @Input() disabled = false;
  @Input() loading = false;
  @Input() classCss: string;
  @Input() classCssText: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';

  @Output() clickedButton = new EventEmitter<boolean>();

  faCircle = faCircleNotch;

  clickButton(): void {
    if (this.loading || this.disabled) {
      return;
    }
    this.clickedButton.emit(true);
  }
}
