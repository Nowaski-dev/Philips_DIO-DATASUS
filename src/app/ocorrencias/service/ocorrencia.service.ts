import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ocorrencia } from '../model/ocorrencia';

@Injectable({
  providedIn: 'root'
})
export class OcorrenciaService {

  constructor(private http:HttpClient) { }

  //método para retornar info
  listOcorrencias(): Observable<Ocorrencia[]> {
    //const url = '/assets/ocorrencias.json';
    const url = '/api/ocorrencias'
    return this.http.get<Ocorrencia[]>(url);
    // [
    //   { id: 1, regiao_id: 2, Mes: 5, faixa_id: 1, qnt_exames: 44 }
    // ];
  }

}