import { Component, OnInit } from '@angular/core';

import { CardAlfa } from '@vissoto-angular-toolkit/ui';

@Component({
  selector: 'app-home-cards',
  templateUrl: './home-cards.component.html',
  styleUrls: ['./home-cards.component.scss'],
})
export class HomeCardsComponent implements OnInit {
  cards: CardAlfa[] = [];
  loopingTeste: number[] = [];

  ngOnInit(): void {
    for (let index = 0; index < 15; index++) {
      this.loopingTeste.push(0);
      this.cards.push({
        date: '31/07/2022',
        imageSrc: 'https://i.pinimg.com/564x/de/23/4d/de234d3aa33209e58c050029266501a8.jpg',
        tags: [
          {
            name: 'angular',
          },
        ],
        message: 'Dizem que nenhum inimigo pode permanecer invisível para LUCARIO, pois ele pode detectar auras.',
        title: 'Lucario',
      });
    }
    console.log(this.cards);
  }
}
