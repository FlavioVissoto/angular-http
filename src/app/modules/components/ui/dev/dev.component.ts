import { Component, OnInit } from '@angular/core';

import { Color } from '../../../../components/dev-comp/interface/color.interface';
import { Position } from '../../../../components/dev-comp/interface/position.interface';
import { Rounded } from './../../../../components/dev-comp/interface/rounded.interface';
import { Size } from '../../../../components/dev-comp/interface/size.interface';
import { TabItem } from '@vissoto-angular/ui';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent implements OnInit {
  eColor = Color;
  eRounded = Rounded;
  eSize = Size;
  ePosition = Position;

  show = true;

  ngOnInit(): void {
    console.log();
  }

  itens: TabItem[] = [];
}
