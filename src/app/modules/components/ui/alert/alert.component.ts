import { Color, Rounded, Size } from '@vissoto-angular/ui';
import { Component, OnInit } from '@angular/core';

import { AlertRequest } from '../../../../interfaces/components/ui/alert.request';
import { AlertUI } from './interfaces/alert.interface';
import { EventsRequest } from '../../../../interfaces/components/events.interface';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { UIServices } from '../../../../services/components/ui/ui.services';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {
  constructor(private uiServices: UIServices) {}

  eRounded = Rounded;
  eSize = Size;
  eColor = Color;

  valuesPage: AlertRequest = {} as AlertRequest;

  colors: AlertUI[] = [
    {
      color: 'red',
      message: 'Charizard: Se Charizard ficar furioso, a chama na ponta de sua cauda se acende em um tom azul claro.',
      show: true,
    },
    {
      color: 'gray',
      message: 'Gengar: Ele rouba o calor de seus arredores. Se você sentir um calafrio repentino, é certo que um GENGAR apareceu.',
      show: true,
    },
    {
      color: 'blue',
      message: 'Blastoise: Ele deliberadamente se torna pesado para poder suportar o recuo dos jatos de água que dispara.',
      show: true,
    },
    {
      color: 'green',
      message: 'Venusaur: Espalhando as largas pétalas de sua flor e captando os raios do sol, ela enche seu corpo de poder.',
      show: true,
    },
    {
      color: 'yellow',
      message: 'Zapdos: Este Pokémon pássaro lendário causa tempestades selvagens ao bater suas asas brilhantes.',
      show: true,
    },
  ];

  ngOnInit(): void {
    this.getValuesPageRequest();
  }

  private getValuesPageRequest(): void {
    this.uiServices.getAlertCodes().subscribe({
      next: (x: RequestDefault<AlertRequest>) => {
        this.valuesPage = x.data;
        this.getEventsPage();
      },
    });
  }

  private getEventsPage(): void {
    this.uiServices.getEvents().subscribe({
      next: (x: RequestDefault<EventsRequest>) => {
        this.valuesPage.events = [];

        x.data.CustomEvents.forEach((element) => {
          this.valuesPage.events.push(element);
        });
      },
    });
  }

  openAllAlerts(): void {
    this.colors.forEach((element: AlertUI) => {
      element.show = true;
    });
  }

  closeAllAlerts(): void {
    this.colors.forEach((element: AlertUI) => {
      element.show = false;
    });
  }
}
