import { Component, OnInit } from '@angular/core';

import { Collor } from '../../../../components/button/interface/button-collor.enum';
import { GradientDuotone } from '../../../../components/button/interface/button-gradient-duotone.enum';
import { GradientMonochrome } from '../../../../components/button/interface/button-gradient-monochrome.enum';
import { Size } from '../../../../components/button/interface/button-size.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  collor: Collor = Collor.Green;
  rounded: Size;
  gradientDuotone: GradientDuotone;
  gradientMonochrome: GradientMonochrome;

  ngOnInit(): void {
    this.colorGradientMonochrome();
  }

  private colorGradientMonochrome(): void {
    const list = new Array<number>();

    for (const item in GradientMonochrome) {
      if (!isNaN(Number(item))) {
        list.push(Number(item));
      }
    }

    let index = 0;
    setInterval(() => {
      this.gradientMonochrome = index as GradientMonochrome;
      if (index == list.length) {
        index = 0;
      } else {
        index++;
      }
    }, 1000);
  }

  private colorGradientDuotone(): void {
    const list = new Array<number>();

    for (const item in GradientDuotone) {
      if (!isNaN(Number(item))) {
        list.push(Number(item));
      }
    }

    let index = 0;
    setInterval(() => {
      this.gradientDuotone = index as GradientDuotone;
      if (index == list.length) {
        index = 0;
      } else {
        index++;
      }
    }, 1000);
  }

  private colorTime(): void {
    const list = new Array<number>();

    for (const item in Collor) {
      if (!isNaN(Number(item))) {
        list.push(Number(item));
      }
    }

    let index = 0;
    setInterval(() => {
      this.collor = index as Collor;
      if (index == list.length) {
        index = 0;
      } else {
        index++;
      }
    }, 1000);
  }

  private roundedTime(): void {
    const list = new Array<number>();

    for (const item in Size) {
      if (!isNaN(Number(item))) {
        list.push(Number(item));
      }
    }

    let index = 0;
    setInterval(() => {
      this.rounded = index as Size;
      if (index == list.length) {
        index = 0;
      } else {
        index++;
      }
    }, 1000);
  }
}
