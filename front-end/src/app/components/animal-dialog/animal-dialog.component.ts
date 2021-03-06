import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';

import { IAnimalService, SERVICE_TOKEN } from '@gd/classes';
import { Animal } from '@gd/models';
import { NotificationService } from '@gd/services';

@Component({
  templateUrl: './animal-dialog.component.html',
  styleUrls: ['./animal-dialog.component.scss'],
})
export class AnimalDialogComponent implements OnInit {
  form: FormGroup;
  id: number;

  constructor(
    @Inject(SERVICE_TOKEN)
    private readonly animalService: IAnimalService,
    @Inject(MAT_DIALOG_DATA)
    private readonly data: Animal,
    private readonly notificationService: NotificationService,
    private readonly dialogRef: MatDialogRef<AnimalDialogComponent>
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      manejo: new FormControl(this.data?.manejo, [Validators.required]),
      tag: new FormControl(this.data?.tag, [Validators.required]),
    });
  }

  save() {
    this.animalService
      .postAnimal(this.form.value)
      .pipe(tap(() => this.notificationService.showMessage(`O registro foi criado com sucesso!`)))

      .subscribe((animal) => this.dialogRef.close(animal));
  }

  close() {
    this.dialogRef.close();
  }
}
