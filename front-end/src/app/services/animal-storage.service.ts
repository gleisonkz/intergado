import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { IAnimalService } from '@gd/classes';
import { Animal } from '@gd/models';

@Injectable({
  providedIn: 'root',
})
export class AnimalStorageService implements IAnimalService {
  private readonly STORAGE_KEY = 'ANIMALS';

  constructor() {
    this.animals = localStorage.getItem(this.STORAGE_KEY) ? this.animals : [];
  }

  postAnimal({ tag, manejo }: Animal): Observable<Animal> {
    const animals = this.animals;
    let nextID = animals.sort((a, b) => b.id - a.id)[0]?.id + 1;
    if ([NaN, null, undefined].includes(nextID)) {
      nextID = 1;
    }
    const newAnimal = { tag, manejo, id: nextID };
    this.animals = [...animals, newAnimal];
    return of(newAnimal);
  }

  putAnimal(id: number, obj: Animal): Observable<Animal> {
    throw new Error('Method not implemented.');
  }

  getAnimals(): Observable<Animal[]> {
    return of(this.animals);
  }

  deleteAnimal(id: number): Observable<Animal> {
    const animals = this.animals;
    const foundAnimal = animals.find((animal) => animal.id === id);
    if (foundAnimal == undefined) throw new Error(`Não existe um animal com o ID: ${id} `);

    this.animals = animals.filter((animal) => animal !== foundAnimal);
    return of(foundAnimal);
  }

  get animals(): Animal[] {
    const data = localStorage.getItem(this.STORAGE_KEY) || '[]';
    return JSON.parse(data);
  }

  set animals(animals: Animal[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(animals));
  }
}
