import { Collor } from '../../../../components/button/interface/button-collor.enum';
import { Component } from '@angular/core';
import { GradientDuotone } from '../../../../components/button/interface/button-gradient-duotone.enum';
import { GradientMonochrome } from '../../../../components/button/interface/button-gradient-monochrome.enum';
import { Size } from '../../../../components/button/interface/button-size.enum';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  collor: Collor = Collor.Green;
  rounded: Size;
  gradientDuotone: GradientDuotone;
  gradientMonochrome: GradientMonochrome;
}
