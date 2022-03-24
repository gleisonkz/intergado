import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@gd/env';
import { Animal } from '@gd/models';
import { AnimalService, AnimalStorageService } from '@gd/services';

export interface IAnimalService {
  postAnimal({ tag, manejo }: Animal): Observable<Animal>;
  putAnimal(id: number, obj: Animal): Observable<Animal>;
  getAnimals(): Observable<Animal[]>;
  deleteAnimal(id: number): Observable<Animal>;
}

export function tokenServiceFactory(
  storage: AnimalStorageService,
  service: AnimalService
) {
  return storage;

  if (environment.production) {
    return storage;
  }
  return service;
}

export const SERVICE_TOKEN = new InjectionToken<IAnimalService>(
  'IAnimalService'
);
