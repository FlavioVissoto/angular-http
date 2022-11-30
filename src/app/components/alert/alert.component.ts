import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-alert-dev',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  /**
   * Label utilizada no botão "x" do modal (Botão para fechar o modal)
   *
   * Exibido apenas em acessibilidade.
   */
  @Input() labelButtonClose = 'Fechar Alerta';

  /**
   * Dispara quando houver um clique do mouse no botão para fechar o elemento.
   *
   * Return: EventEmitter
   */
  @Output() byClickClose = new EventEmitter();

  close(): void {
    this.byClickClose.emit();
  }

  /**
   * Cor utilizada para o alerta.
   *
   * Cores disponíveis: red | gray | blue | green | yellow
   */
  @Input() color: string;

  @Input() customCss: string;
}
