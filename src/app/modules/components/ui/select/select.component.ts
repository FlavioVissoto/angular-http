import { Component, OnInit } from '@angular/core';

import { SelectItem } from '@vissoto-angular-toolkit/ui';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  itens: SelectItem[] = [];

  ngOnInit(): void {
    this.itens.push({
      selected: true,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/bulbasaur.png',
      text: 'Bulbasaur',
      value: 1,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/ivysaur.png',
      text: 'Ivysaur',
      value: 2,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/venusaur.png',
      text: 'venusaur',
      value: 3,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/charmander.png',
      text: 'Charmander',
      value: 4,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/charmeleon.png',
      text: 'Charmeleon',
      value: 5,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/charizard.png',
      text: 'Charizard',
      value: 6,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/squirtle.png',
      text: 'Squirtle',
      value: 7,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/wartortle.png',
      text: 'Wartortle',
      value: 8,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/blastoise.png',
      text: 'Blastoise',
      value: 9,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/caterpie.png',
      text: 'Caterpie',
      value: 10,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/metapod.png',
      text: 'Metapod',
      value: 11,
    });
    this.itens.push({
      selected: false,
      srcImg: 'https://img.pokemondb.net/sprites/home/normal/butterfree.png',
      text: 'Butterfree',
      value: 12,
    });
  }
}
