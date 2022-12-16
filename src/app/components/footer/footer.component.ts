import { Component } from '@angular/core';
import { Position } from '@vissoto-angular/ui';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  ePosition = Position;
}
