import { Component, OnInit } from '@angular/core';

import { EventsRequest } from '../../../../interfaces/components/events.interface';
import { ModalRequest } from '../../../../interfaces/components/ui/modal-request.interface';
import { RequestDefault } from '../../../../interfaces/request/request.interface';
import { UIServices } from '../../../../services/components/ui/ui.services';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  constructor(private uiServices: UIServices) {}

  showModal = false;

  valuesPage: ModalRequest = {} as ModalRequest;

  ngOnInit(): void {
    this.getValuesPageRequest();
  }

  toggleModal(): void {
    this.showModal = !this.showModal;
  }

  closeModal(): void {
    this.showModal = false;
  }

  private getValuesPageRequest(): void {
    this.uiServices.getModalCodes().subscribe({
      next: (x: RequestDefault<ModalRequest>) => {
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
}
