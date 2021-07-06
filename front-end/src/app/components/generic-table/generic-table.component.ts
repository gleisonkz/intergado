import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActionEvent, ButtonAction } from 'src/app/models/actions';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent<T> {
  @Input() hasDefaultActions = true;
  @Input() tableData: T[];
  @Output() actionEvent = new EventEmitter<ActionEvent<T>>();
  readonly defaultActions: ButtonAction[] = [
    {
      buttonText: 'Deletar',
      eventName: 'delete',
      iconName: 'delete',
    },
  ];

  @Input()
  set itemsDisplayedColumns(items: any) {
    this._itemsDisplayedColumns = {
      ...items,
      actions: items['actions'] ?? 'Ações',
    };
  }
  get itemsDisplayedColumns() {
    return this._itemsDisplayedColumns;
  }

  @Input()
  set actions(items: ButtonAction[]) {
    this._actions = items;
  }
  get actions(): ButtonAction[] {
    const actions = [
      ...((this.hasDefaultActions && this.defaultActions) || []),
      ...(this._actions || []),
    ];
    return actions;
  }

  get columnsWithoutActions(): string[] {
    return this.objectKeys(this.itemsDisplayedColumns).filter(
      (c) => c !== 'actions'
    );
  }

  private _actions: ButtonAction[] = [];
  private _itemsDisplayedColumns: any;

  objectKeys = Object.keys;
}
