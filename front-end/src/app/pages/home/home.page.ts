import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnimalDialogComponent } from 'src/app/components/animal-dialog/animal-dialog.component';
import { createMatDialogConfig } from 'src/app/functions/createMatDialogConfig';
import { ActionEvent } from 'src/app/models/actions';
import { Animal } from 'src/app/models/animal';
import { TableColumns } from 'src/app/models/table-columns';
import { AnimalService } from 'src/app/services/animal.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private dialogService: MatDialog,
    private animalService: AnimalService,
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
    this.dialogService.open(
      AnimalDialogComponent,
      createMatDialogConfig({ data: animal })
    );
  }

  delete(itemToDelete: Animal) {
    this.animalService.deleteAnimal(itemToDelete.id).subscribe((item) => {
      this.notificationService.showMessage(
        `Você deletou o registro id: ${itemToDelete.id} - ${itemToDelete.manejo}`
      );
    });
  }
}
