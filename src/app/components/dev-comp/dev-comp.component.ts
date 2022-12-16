import { Color, Rounded } from '@vissoto-angular/ui';
import { Component, Input, OnInit } from '@angular/core';

import { Position } from './interface/position.interface';
import { Size } from './interface/size.interface';

@Component({
  selector: 'app-dev-comp',
  templateUrl: './dev-comp.component.html',
  styleUrls: ['./dev-comp.component.scss'],
})
export class DevCompComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.eColor, this.eRounded, this.eSize);
  }

  eColor = Color;
  eRounded = Rounded;
  eSize = Size;

  @Input() text = '';
  @Input() position: Position = Position.top;
  @Input() show = false;
}
