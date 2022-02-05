import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private httpClient: HttpClient) { }

  urlPaises = 'assets/paises.json';

  todosPaisesCidades(): any {
    return this.httpClient.get<any>(this.urlPaises);
  }

}
