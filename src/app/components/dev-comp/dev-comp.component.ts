import { Color, Rounded } from '@vissoto-angular/ui';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  /**
   * Dispara quando houver um clique do mouse no botão para fechar o elemento.
   *
   * Return: EventEmitter
   */
  @Output() byClickClose = new EventEmitter();

  /**
   * Cor utilizada para o alerta.
   *
   * Cores disponíveis: red | gray | blue | green | yellow
   */
  @Input() color: Color = Color.yellow;

  /**
   * Classe CSS customizada para o alerta.
   */
  @Input() customCss: string;

  /**
   * Tempo de exibição do alerta em milisegundos.
   */
  @Input() timer = 3000;

  /**
   * Realiza o fechamento do alerta automaticamente no intervalo especificado no parametro "time" após aberto.
   */
  @Input() autoClose = true;

  _show = false;
  @Input() set show(value: boolean) {
    this._show = value;
    this.timeoutClose();
  }

  timeoutClose() {
    setTimeout(() => {
      if (this.autoClose) {
        this.close();
      }
    }, this.timer);
  }

  close(): void {
    //this._show = false;
    this.byClickClose.emit();
  }
}
