import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnimalDialogComponent } from 'src/app/components/animal-dialog/animal-dialog.component';
import { createMatDialogConfig } from 'src/app/functions/createMatDialogConfig';
import { ActionEvent } from 'src/app/models/actions';
import { Animal } from 'src/app/models/animal';
import { TableColumns } from 'src/app/models/table-columns';
import { AnimalService } from 'src/app/services/animal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private dialogService: MatDialog,
    private animalService: AnimalService
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
      case 'edit':
        this.edit(actionEvent.item);
        break;
      case 'delete':
        this.delete(actionEvent.item);
        break;

      default:
        throw new Error('action não mapeada');
    }
  }

  add(animal?: Animal) {
    const dialogRef = this.dialogService.open(
      AnimalDialogComponent,
      createMatDialogConfig({ data: animal })
    );

    dialogRef.afterClosed().subscribe((comicInventory: Animal) => {
      if (comicInventory) {
        // this.loadData();
      }
    });
  }

  edit(item: Animal) {
    alert(`Voce editou o animal ${item.id} - ${item.manejo}`);
  }
  delete(item: Animal) {
    alert(`Voce deletou o produto ${item.id} - ${item.manejo}`);
  }
}
