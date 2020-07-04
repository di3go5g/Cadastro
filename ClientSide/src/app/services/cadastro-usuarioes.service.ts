import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { CadastroUsuarioes } from '../models/cadastro-usuarioes';

@Injectable({
  providedIn: 'root'
})
export class CadastroUsuarioesService {

  url = 'https://localhost:44383/api/UsuarioCadastro';

  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  }

  getUsuarioCadastro(): Observable<CadastroUsuarioes[]>{
    return this.httpClient.get<CadastroUsuarioes[]>(this.url)
  }

  saveUsuarioCadastro(usuarioCadastro: CadastroUsuarioes): Observable<CadastroUsuarioes> {
    return this.httpClient.post<CadastroUsuarioes>(this.url, JSON.stringify(usuarioCadastro), this.httpOptions)
  }

  updateUsuarioCadastro(usuarioCadastro: CadastroUsuarioes): Observable<CadastroUsuarioes> {
    return this.httpClient.put<CadastroUsuarioes>(this.url + '/' + usuarioCadastro.Id, JSON.stringify(usuarioCadastro), this.httpOptions)
  }

  deleteUsuarioCadastro(usuarioCadastro: CadastroUsuarioes) {
    console.log(usuarioCadastro)
    return this.httpClient.delete<CadastroUsuarioes>(this.url + '/' + usuarioCadastro.Id, this.httpOptions)
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } 
    else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
  }
}
