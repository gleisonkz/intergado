import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gd-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss'],
})
export class AddButtonComponent {
  @Output() clickEvent = new EventEmitter<void>();
}
