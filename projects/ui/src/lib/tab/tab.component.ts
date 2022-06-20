import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IonUITab } from './interfaces/iui-tab.interface';

@Component({
  selector: 'vat-tab',
  templateUrl: './tab.component.html',
})
export class TabComponent {
  @Input() Tabs: IonUITab[] = [];

  /**
   * Evento disparado quando usuário selecionar um item.
   */
  @Output() clickedTab = new EventEmitter<IonUITab>();

  /**
   *
   * @param tab Item selecionado pelo usuário no template.
   */
  clickTab(tab: IonUITab): void {
    this.setSelected(tab);
    this.clickedTab.emit(tab);
  }

  setSelected(tab: IonUITab): void {
    for (let index = 0; index < this.Tabs.length; index++) {
      this.Tabs[index].selected = this.Tabs[index].id === tab.id && this.Tabs[index].text === tab.text;
    }
  }
}
