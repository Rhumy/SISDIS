import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Usuario } from '../modelo/usuario.model';
@Injectable({
    providedIn: 'root'
})
export class RecibePuntajeServicio {
    //apiURL = 'http://localhost:8080';
    apiURL = 'https://sisdisapi.herokuapp.com/';

    headers: HttpHeaders;

    params = new HttpParams();
    usuario: Usuario = {
        juego: ''
    }
    constructor(private http: HttpClient) { }

    requestOptions: Object = {
        /* other options here */
        responseType: 'text'
    };

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    recibePuntaje(juego: string): Observable<Usuario[]> {
        console.log('Se va a buscar el juego: ' + juego);
        if(juego == 'Global'){
            return this.http.get<Usuario[]>(this.apiURL);
        }
        else{
            return this.http.get<Usuario[]>(this.apiURL+'?juego='+juego);
        }
    }

}
