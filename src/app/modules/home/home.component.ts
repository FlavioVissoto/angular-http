import { Component } from '@angular/core';
import { Position } from '@vissoto-angular/ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  ePosition = Position;
}
