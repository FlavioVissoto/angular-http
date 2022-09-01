import { Component, Input } from '@angular/core';

import { Collor } from './interface/button-collor.enum';
import { GradientDuotone } from './interface/button-gradient-duotone.enum';
import { GradientMonochrome } from './interface/button-gradient-monochrome.enum';
import { Shadow } from './interface/button-shadow.enum';
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
    if (!this.collor && !this.gradientDuotone && !this.gradientMonochrome) {
      this.collor = Collor.Default;
    }
  }

  enumCollor = Collor;
  enumRounded = Size;
  enumGradientMonochrome = GradientMonochrome;
  enumGradientDuotone = GradientDuotone;

  cssShadow: string;
  cssClassCollor: string;
  cssClassRounded: string;
  cssClassOutline: string;
  cssClassGradientDuotone: string;
  cssClassGradientMonochrome: string;
  cssClassSize: string;
  cssClassDisabled: string;

  @Input() text: string;
  @Input() message: string;
  @Input() loading: boolean;

  private _shadow: Shadow;
  private _rounded: Size;
  private _collor: Collor;
  private _gradientDuotone: GradientDuotone;
  private _gradientMonochrome: GradientMonochrome;
  private _size: Size;
  private _disabled: boolean;

  @Input() set disabled(value: boolean) {
    this._disabled = value;
    this.cssClassDisabled = this.setCssDisabled();

    if (this._shadow) {
      this.setCssShadow();
    }
    if (this._collor) {
      this.collor = this._collor;
    }
    if (this._gradientDuotone) {
      this.gradientDuotone = this._gradientDuotone;
    }
    if (this._gradientMonochrome) {
      this.gradientMonochrome = this._gradientMonochrome;
    }
  }
  get disabled(): boolean {
    return this._disabled;
  }

  @Input() set shadow(value: Shadow) {
    this._shadow = value;
    this.cssShadow = this.setCssShadow();
  }

  @Input() set rounded(value: Size) {
    this._rounded = value;
    this.cssClassRounded = this.setCssRounded();
  }

  @Input() set collor(value: Collor) {
    this._collor = value;
    this.cssClassCollor = this.setCssCollor();
  }

  @Input() set gradientDuotone(value: GradientDuotone) {
    this._gradientDuotone = value;
    this.cssClassGradientDuotone = this.setCssGradientDuotone();
  }

  @Input() set gradientMonochrome(value: GradientMonochrome) {
    this._gradientMonochrome = value;
    this.cssClassGradientMonochrome = this.setCssGradientMonochrome();
  }

  @Input() set size(value: Size) {
    this._size = value;
    this.cssClassSize = this.setCssSize();
  }

  // private setCssGradientOutline(value: GradientDuotone): string {
  //   switch (value) {
  //     case GradientDuotone.CyanToBlue:
  //       return 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl active:ring-cyan-300';
  //     case GradientDuotone.GreenToBlue:
  //       return 'bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl active:ring-green-200';
  //     case GradientDuotone.PinkToOrange:
  //       return 'bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl active:ring-pink-200';
  //     case GradientDuotone.PurpleToBlue:
  //       return 'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl active:ring-blue-300';
  //     case GradientDuotone.PurpleToPink:
  //       return 'bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l active:ring-purple-200';
  //     case GradientDuotone.RedToYellow:
  //       return 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl active:ring-red-100';
  //     case GradientDuotone.TealToLime:
  //       return 'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 active:ring-lime-200';
  //   }
  // }

  private setCssShadow(): string {
    const css = 'shadow-lg ';
    switch (this._shadow) {
      case Shadow.Blue:
        return css + 'shadow-blue-500/50';
      case Shadow.Cyan:
        return css + 'shadow-cyan-500/50';
      case Shadow.Green:
        return css + 'shadow-green-500/50';
      case Shadow.Lime:
        return css + 'shadow-lime-500/50';
      case Shadow.Pink:
        return css + 'shadow-pink-500/50';
      case Shadow.Purple:
        return css + 'shadow-purple-500/50';
      case Shadow.Red:
        return css + 'shadow-red-500/50';
      case Shadow.Teal:
        return css + 'shadow-teal-500/50';
    }
  }

  private setCssRounded(): string {
    switch (this._rounded) {
      case Size.Base:
        return 'rounded-lg';
      case Size.ExtraLarge:
      case Size.Large:
        return 'rounded-full';
      case Size.ExtraSmall:
        return 'rounded-sm';
      case Size.Small:
        return 'rounded-md';
      default:
        return '';
    }
  }

  private setCssCollor(): string {
    if (!this._disabled) {
      switch (this._collor) {
        case Collor.Default:
          return 'text-white bg-blue-700 hover:bg-blue-800 active:ring-blue-300';
        case Collor.Alternative:
          return 'text-gray-900 border bg-white border-gray-200 hover:bg-gray-100 hover:text-blue-700';
        case Collor.Dark:
          return 'text-white bg-gray-800 hover:bg-gray-900 active:ring-gray-300';
        case Collor.Light:
          return 'text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 active:ring-gray-200';
        case Collor.Green:
          return 'text-white bg-green-700 hover:bg-green-800 active:ring-green-300';
        case Collor.Red:
          return 'text-white bg-red-700 hover:bg-red-800 active:ring-red-300';
        case Collor.Yellow:
          return 'text-white bg-yellow-400 hover:bg-yellow-500 active:ring-yellow-300';
        case Collor.Purple:
          return 'text-white bg-purple-400 hover:bg-purple-800 active:ring-purple-300';
      }
    } else {
      switch (this._collor) {
        case Collor.Default:
          return 'text-white bg-blue-300';
        case Collor.Alternative:
          return 'text-gray-400 border bg-white border-gray-100';
        case Collor.Dark:
          return 'text-white bg-gray-400';
        case Collor.Light:
          return 'text-gray-400 bg-white border border-gray-100';
        case Collor.Green:
          return 'text-white bg-green-900';
        case Collor.Red:
          return 'text-white bg-red-300';
        case Collor.Yellow:
          return 'text-white bg-yellow-600';
        case Collor.Purple:
          return 'text-white bg-purple-300';
      }
    }
  }

  private setCssGradientDuotone(): string {
    if (!this._disabled) {
      switch (this._gradientDuotone) {
        case GradientDuotone.PurpleToBlue:
          return 'bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl active:ring-blue-300';
        case GradientDuotone.CyanToBlue:
          return 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl active:ring-cyan-300';
        case GradientDuotone.GreenToBlue:
          return 'bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl active:ring-green-200';
        case GradientDuotone.PurpleToPink:
          return 'bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l active:ring-purple-200';
        case GradientDuotone.PinkToOrange:
          return 'bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl active:ring-pink-200';
        case GradientDuotone.TealToLime:
          return 'text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 active:ring-lime-200';
        case GradientDuotone.RedToYellow:
          return 'text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl active:ring-red-100';
      }
    } else {
      switch (this._gradientDuotone) {
        case GradientDuotone.PurpleToBlue:
          return 'bg-gradient-to-br from-purple-400 to-blue-300';
        case GradientDuotone.CyanToBlue:
          return 'bg-gradient-to-r from-cyan-300 to-blue-300';
        case GradientDuotone.GreenToBlue:
          return 'bg-gradient-to-br from-green-200 to-blue-300';
        case GradientDuotone.PurpleToPink:
          return 'bg-gradient-to-r from-purple-300 to-pink-300';
        case GradientDuotone.PinkToOrange:
          return 'text-gray-700 bg-gradient-to-br from-pink-100 to-orange-100';
        case GradientDuotone.TealToLime:
          return 'text-gray-900 bg-gradient-to-r from-teal-100 to-lime-100';
        case GradientDuotone.RedToYellow:
          return 'text-gray-900 bg-gradient-to-r from-red-100 via-red-200 to-yellow-100';
      }
    }
  }

  private setCssGradientMonochrome(): string {
    if (!this._disabled) {
      switch (this._gradientMonochrome) {
        case GradientMonochrome.Blue:
          return 'bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br active:ring-blue-300';
        case GradientMonochrome.Cyan:
          return 'text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br active:ring-cyan-300';
        case GradientMonochrome.Green:
          return 'bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br active:ring-green-300';
        case GradientMonochrome.Lime:
          return 'text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br active:ring-lime-300';
        case GradientMonochrome.Pink:
          return 'text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br active:ring-pink-300';
        case GradientMonochrome.Purple:
          return 'text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br active:ring-purple-300';
        case GradientMonochrome.Red:
          return 'text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br active:ring-red-300';
        case GradientMonochrome.Teal:
          return 'text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br active:ring-teal-300';
      }
    } else {
      switch (this._gradientMonochrome) {
        case GradientMonochrome.Blue:
          return 'bg-gradient-to-r from-blue-200 to-blue-300';
        case GradientMonochrome.Green:
          return 'bg-gradient-to-r from-green-200 via-green-400 to-green-300';
        case GradientMonochrome.Cyan:
          return 'text-white bg-gradient-to-r from-cyan-200 via-cyan-400 to-cyan-300';
        case GradientMonochrome.Teal:
          return 'text-white bg-gradient-to-r from-teal-200 via-teal-400 to-teal-300';
        case GradientMonochrome.Lime:
          return 'text-gray-900 bg-gradient-to-r from-lime-100 via-lime-200 to-lime-200';
        case GradientMonochrome.Red:
          return 'text-white bg-gradient-to-r from-red-200 via-red-400 to-red-300';
        case GradientMonochrome.Pink:
          return 'text-white bg-gradient-to-r from-pink-200 via-pink-400 to-pink-500';
        case GradientMonochrome.Purple:
          return 'text-white bg-gradient-to-r from-purple-200 via-purple-300 to-purple-400';
      }
    }
  }

  private setCssSize(): string {
    switch (this._size) {
      case Size.ExtraSmall:
        return 'py-2 px-3 text-xs';
      case Size.Small:
        return 'py-2 px-3 text-sm';
      default:
      case Size.Base:
        return 'py-2.5 px-5 text-sm';
      case Size.Large:
        return 'py-3 px-5 text-base';
      case Size.ExtraLarge:
        return 'py-3.5 px-6 text-base';
    }
  }

  private setCssDisabled(): string {
    if (this._disabled) {
      return 'cursor-not-allowed';
    } else {
      return '';
    }
  }
}
