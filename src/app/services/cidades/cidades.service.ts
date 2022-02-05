import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CidadesService {

  constructor(private httpClient: HttpClient) { }

  urlCidades = 'assets/cidades.json';

  todasCidades(): any {
    return this.httpClient.get<any>(this.urlCidades);
  }
}
