import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Usuario } from '../modelo/usuario.model';
@Injectable({
    providedIn: 'root'
})
export class EnviaPuntajeServicio {
    //apiURL = 'http://localhost:8080';
    apiURL = 'https://sisdisapi.herokuapp.com';

    constructor(private http: HttpClient) { }

    requestOptions: Object = {
        /* other options here */
        responseType: 'application/json'
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    enviaPuntaje(usuario: Usuario): Observable<Usuario> {
        console.log(JSON.stringify(usuario));

        return this.http.post<Usuario>(this.apiURL, JSON.stringify(usuario), this.requestOptions);

    }

}