import { ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { SERVICE_TOKEN } from '@gd/classes';
import { AnimalService } from '@gd/services';
import { render, screen } from '@testing-library/angular';
import { instance, mock } from 'ts-mockito';

import { AnimalDialogComponent } from './animal-dialog.component';

describe('AnimalDialogComponent', () => {
  const mockedMatDialogRef = jasmine.createSpyObj<MatDialogRef<AnimalDialogComponent>>('MatDialogRef', ['close']);
  const mockedAnimalService = mock(AnimalService);

  it('should call output event on click', async () => {
    await render(AnimalDialogComponent, {
      providers: [
        { provide: MatDialogRef, useFactory: () => mockedMatDialogRef },
        { provide: SERVICE_TOKEN, useFactory: () => instance(mockedAnimalService) },
        {
          provide: MAT_DIALOG_DATA,
          useFactory: () => ({
            manejo: 'any',
            tag: 'any',
          }),
        },
      ],
      imports: [MatIconModule, MatDialogModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule],
    });

    screen.getByTestId('close-button').click();

    expect(mockedMatDialogRef.close).toHaveBeenCalledTimes(1);
  });
});
