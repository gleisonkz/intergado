import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { switchMap, tap } from 'rxjs/operators';

import { IAnimalService, SERVICE_TOKEN } from '@gd/classes';
import { AnimalDialogComponent } from '@gd/components';
import { createMatDialogConfig } from '@gd/functions';
import { ActionEvent, Animal, TableColumns } from '@gd/models';
import { NotificationService } from '@gd/services';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private dialogService: MatDialog,
    @Inject(SERVICE_TOKEN)
    private animalService: IAnimalService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.animalService
      .getAnimals()
      .subscribe((animals) => (this.dataSource = animals));
  }

  dataSource: Animal[];
  productColumns: TableColumns<Animal> = {
    id: '#',
    manejo: 'Manejo',
    tag: 'Tag',
  };

  handleActions(actionEvent: ActionEvent<Animal>) {
    switch (actionEvent.eventName) {
      case 'add':
        this.add();
        break;
      case 'delete':
        this.delete(actionEvent.item);
        break;

      default:
        throw new Error('action não mapeada');
    }
  }

  add(animal?: Animal) {
    const ref = this.dialogService.open(
      AnimalDialogComponent,
      createMatDialogConfig({ data: animal })
    );

    ref
      .afterClosed()
      .pipe(
        switchMap(() => {
          return this.animalService.getAnimals();
        })
      )
      .subscribe((animals) => (this.dataSource = animals));
  }

  delete(itemToDelete: Animal) {
    this.animalService
      .deleteAnimal(itemToDelete.id)
      .pipe(
        tap(() => {
          this.notificationService.showMessage(
            `Você deletou o registro id: ${itemToDelete.id} - ${itemToDelete.manejo}`
          );
        }),
        switchMap(() => {
          return this.animalService.getAnimals();
        })
      )
      .subscribe((animals) => (this.dataSource = animals));
  }
}
