import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vat-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  ngOnInit(): void {
    console.log('init');
  }
}
