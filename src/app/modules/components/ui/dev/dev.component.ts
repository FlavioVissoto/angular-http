import { Component, OnInit } from '@angular/core';

import { Color } from '../../../../components/dev-comp/interface/color.interface';
import { Rounded } from './../../../../components/dev-comp/interface/rounded.interface';
import { Size } from '../../../../components/dev-comp/interface/size.interface';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.scss'],
})
export class DevComponent implements OnInit {
  ngOnInit(): void {
    console.log(this.eColor, this.eRounded, this.eSize);
  }

  eColor = Color;
  eRounded = Rounded;
  eSize = Size;

  show = true;

  close(): void {
    this.show = true;
  }
}
