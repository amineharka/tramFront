import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ILoginRequest} from './LoginRequest';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  encoded:any;

  constructor(private http : HttpClient) { }

  public generateToken(Loginrequest : ILoginRequest)
   {
      return this.http.post("http://localhost:8085/auth/authenticate",Loginrequest,{responseType : 'text' as 'json'});
   }

   public saveToken(token : string)
   {
      localStorage.setItem("token",token);
      this.encoded = jwt_decode(token)
      localStorage.setItem("role",this.encoded.role);
   }

   public loadToken()
   {
     return localStorage.getItem("token");
   }
}
