import { Component, Input } from '@angular/core';

import { Collor } from './interface/button-collor.enum';
import { GradientDuotone } from './interface/button-gradient-duotone.enum';
import { GradientMonochrome } from './interface/button-gradient-monochrome.enum';
import { Size } from './interface/button-size.enum';

@Component({
  selector: 'apptest-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  constructor() {
    if (!this.size) {
      this.size = Size.Base;
    }
    if (!this.collor && !this.gradientDuotone && !this.gradientMonochrome && !this.gradientOutline) {
      this.collor = Collor.Default;
    }
  }

  enumCollor = Collor;
  enumRounded = Size;
  enumGradientMonochrome = GradientMonochrome;
  enumGradientDuotone = GradientDuotone;

  cssClassCollor: string;
  cssClassRounded: string;
  cssClassGradientDuotone: string;
  cssClassGradientMonochrome: string;
  cssClassSize: string;

  @Input() text: string;

  @Input() disabled: boolean;
  @Input() loading: boolean;
  @Input() outline: boolean;
  @Input() gradientOutline: boolean;
  @Input() shadow: boolean;
  @Input() set rounded(value: Size) {
    this.setCssRounded(value);
  }

  @Input() set collor(value: Collor) {
    this.setCssCollor(value);
  }

  @Input() set gradientDuotone(value: GradientDuotone) {
    this.setCssGradientDuotone(value);
  }

  @Input() set gradientMonochrome(value: GradientMonochrome) {
    this.setCssGradientMonochrome(value);
  }

  @Input() set size(value: Size) {
    console.log(value);
    this.setCssSize(value);
  }

  private setCssRounded(value: Size): void {
    switch (value) {
      case Size.Base:
        this.cssClassRounded = 'rounded-lg';
        break;
      case Size.ExtraLarge:
      case Size.Large:
        this.cssClassRounded = 'rounded-full';
        break;
      case Size.ExtraSmall:
        this.cssClassRounded = 'rounded-sm';
        break;
      case Size.Small:
        this.cssClassRounded = 'rounded-md';
        break;
      default:
        this.cssClassRounded = '';
        break;
    }
  }

  private setCssCollor(value: Collor): void {
    switch (value) {
      default:
        this.cssClassCollor = '';
        break;
      case Collor.Default:
        this.cssClassCollor = 'text-white bg-blue-700 hover:bg-blue-800 active:ring-blue-300';
        break;
      case Collor.Alternative:
        this.cssClassCollor = 'text-gray-900 border bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700';
        break;
      case Collor.Dark:
        this.cssClassCollor = 'text-white bg-gray-800 hover:bg-gray-900 active:ring-gray-300';
        break;
      case Collor.Light:
        this.cssClassCollor = 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 active:ring-gray-200';
        break;
      case Collor.Green:
        this.cssClassCollor = 'text-white bg-green-700 hover:bg-green-800 active:ring-green-300';
        break;
      case Collor.Red:
        this.cssClassCollor = 'text-white bg-red-700 hover:bg-red-800 active:ring-red-300';
        break;
      case Collor.Yellow:
        this.cssClassCollor = 'text-white bg-yellow-400 hover:bg-yellow-500 active:ring-yellow-300';
        break;
      case Collor.Purple:
        this.cssClassCollor = 'text-white bg-purple-700 hover:bg-purple-800 active:ring-purple-300';
        break;
    }
  }

  private setCssGradientDuotone(value: GradientDuotone): void {
    switch (value) {
      case GradientDuotone.CyanToBlue:
        this.cssClassGradientDuotone = 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl active:ring-cyan-300';
        break;
      case GradientDuotone.GreenToBlue:
        this.cssClassGradientDuotone = 'bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl active:ring-green-200';
        break;
      case GradientDuotone.PinkToOrange:
        this.cssClassGradientDuotone = 'bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl active:ring-pink-200';
        break;
      case GradientDuotone.PurpleToBlue:
        this.cssClassGradientDuotone = 'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl active:ring-blue-300';
        break;
      case GradientDuotone.PurpleToPink:
        this.cssClassGradientDuotone = 'bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l active:ring-purple-200';
        break;
      case GradientDuotone.RedToYellow:
        this.cssClassGradientDuotone =
          'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl active:ring-red-100';
        break;
      case GradientDuotone.TealToLime:
        this.cssClassGradientDuotone =
          'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 active:ring-lime-200';
        break;
    }
  }

  private setCssGradientMonochrome(value: GradientMonochrome): void {
    switch (value) {
      case GradientMonochrome.Blue:
        this.cssClassGradientMonochrome =
          'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br active:ring-blue-300';
        break;
      case GradientMonochrome.Cyan:
        this.cssClassGradientMonochrome =
          'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br active:ring-cyan-300';
        break;
      case GradientMonochrome.Green:
        this.cssClassGradientMonochrome =
          'bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br active:ring-green-300';
        break;
      case GradientMonochrome.Lime:
        this.cssClassGradientMonochrome =
          'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br active:ring-lime-300';
        break;
      case GradientMonochrome.Pink:
        this.cssClassGradientMonochrome =
          'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br active:ring-pink-300';
        break;
      case GradientMonochrome.Purple:
        this.cssClassGradientMonochrome =
          'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br active:ring-purple-300';
        break;
      case GradientMonochrome.Red:
        this.cssClassGradientMonochrome =
          'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br active:ring-red-300';
        break;
      case GradientMonochrome.Teal:
        this.cssClassGradientMonochrome =
          'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br active:ring-teal-300';
        break;
    }
  }

  private setCssSize(value: Size): void {
    switch (value) {
      case Size.ExtraSmall:
        this.cssClassSize = 'py-2 px-3 text-xs';
        break;
      case Size.Small:
        this.cssClassSize = 'py-2 px-3 text-sm';
        break;
      default:
      case Size.Base:
        this.cssClassSize = 'py-2.5 px-5 text-sm';
        break;
      case Size.Large:
        this.cssClassSize = 'py-3 px-5 text-base';
        break;
      case Size.ExtraLarge:
        this.cssClassSize = 'py-3.5 px-6 text-base';
        break;
    }
  }
}
