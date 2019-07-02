import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { emailPojo } from '../modelo/emailPojo.model';
@Injectable({
    providedIn: 'root'
})
export class EnviaCorreoServicio {
    //apiURL = 'http://localhost:8080';
    apiURL = '//sendermailstartup.herokuapp.com';

    constructor(private http: HttpClient) { }
  
    requestOptions: Object = {
        /* other options here */
        responseType: 'text'
      }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    }

    sendMail(emailPojo:emailPojo):Observable<emailPojo>{
    console.log(JSON.stringify(emailPojo));
    
    return this.http.post<emailPojo>(this.apiURL+'/email',emailPojo,this.requestOptions);

    }

}