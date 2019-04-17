import { Injectable } from '@angular/core';
import {Item, Product} from '../models';
import {Marchant} from '../models/marchant';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarchantService {

  constructor(private http: HttpClient) { }

  public add(marchant: Marchant): void {

  }
  public remove() {

  }
  public getMarchant(id): Observable<Marchant> {
    return this.http.get<Marchant>(`/api/marchant?id=${id}`);
  }
}
