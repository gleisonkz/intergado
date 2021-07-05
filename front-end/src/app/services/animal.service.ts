import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Animal } from 'src/app/models/animal';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private endpoint = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  postAnimal({ tag, manejo }: Animal): Observable<Animal> {
    return this.http.post<Animal>(this.endpoint, { tag, manejo });
  }

  putAnimal(id: number, obj: Animal): Observable<Animal> {
    return this.http.put<Animal>(`${this.endpoint}/${id}`, obj);
  }

  getAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.endpoint);
  }

  deleteAnimal(id: number): Observable<Animal> {
    return this.http.delete<Animal>(`${this.endpoint}/${id}`);
  }
}
