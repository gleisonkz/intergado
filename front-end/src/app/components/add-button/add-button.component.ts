import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'gd-add-button',
  template: `
    <button data-testid="gd-add-button" class="add-button" (click)="clickEvent.emit()" mat-raised-button>
      <mat-icon class="add-button__icon">add</mat-icon>
      <ng-content class="add-button__content"> </ng-content>
    </button>
  `,
})
export class AddButtonComponent {
  @Output() clickEvent = new EventEmitter<void>();
}
