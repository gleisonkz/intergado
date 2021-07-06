import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/models/animal';
import { AnimalStorageService } from 'src/app/services/animal-storage.service';
import { AnimalService } from 'src/app/services/animal.service';
import { environment } from 'src/environments/environment';

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
  if (environment.production) {
    return storage;
  }
  return service;
}

export const SERVICE_TOKEN = new InjectionToken<IAnimalService>(
  'IAnimalService'
);
