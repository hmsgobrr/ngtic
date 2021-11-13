import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `
    <button mat-flat-button [color]="val == 'X' ? 'primary' : (val ? 'accent' : '')">{{ val }}</button>
  `,
  styles: [
    `button {
      width: 100%;
      height: 100%;
      font-size: 5em !important;
      border-radius: 0px;
    }`
  ]
})
export class SquareComponent {
  @Input() val: 'X' | 'O';
}
