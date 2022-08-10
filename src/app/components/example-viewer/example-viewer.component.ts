import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example-viewer',
  templateUrl: './example-viewer.component.html',
  styleUrls: ['./example-viewer.component.scss'],
})
export class ExampleViewerComponent {
  @Input() title: string;

  clickCode(): void {
    console.log('clicou para abrir codigo');
  }

  clickLink(): void {
    console.log('clicou para copiar link');
  }
}
