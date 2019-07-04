import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Usuario } from '../modelo/usuario.model';
@Injectable({
    providedIn: 'root'
})
export class EnviaPuntajeServicio {
    //apiURL = 'http://localhost:8080';
    apiURL = 'https://sisdisapi.herokuapp.com/';

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

    enviaPuntaje(usuario: Usuario): Observable<Usuario> {


        return this.http.post<Usuario>(this.apiURL, /*JSON.stringify(*/usuario/*), this.requestOptions*/);

    }

}
