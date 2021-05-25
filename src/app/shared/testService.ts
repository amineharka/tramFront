import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ligne } from '../model/model.ligne';


@Injectable({
  providedIn: 'root'
})
export class TestService {

    headers : HttpHeaders;

  constructor(private http : HttpClient) {
      

   }

  public sendrequest():Observable<Ligne>
  {
      return this.http.get<Ligne>("http://localhost:8085/test");
  }

}
