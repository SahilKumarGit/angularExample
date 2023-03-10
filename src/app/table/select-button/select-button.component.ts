import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-select-button',
  templateUrl: './select-button.component.html',
  styleUrls: ['./select-button.component.scss']
})
export class SelectButtonComponent {
  @Input() checked: boolean = false;
  @Input() size: number = 16;
  @Input() color: string = '#fff';
}
