import { Empresa } from './empresa';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/Empresas";

  addEmpresa(obj : Empresa): Observable<Empresa> {
    return this.http.post<Empresa>(this.url, obj);
  }

  getEmpresas(): Observable<Empresa[]> {
    return this.http.get<Empresa[]>(this.url);
  }

  removeEmpresa(toBeDeleted : Empresa): Observable<void>{
    return this.http.delete<void>(`${this.url}/${toBeDeleted.id}`);
  }
}
