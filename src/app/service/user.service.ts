import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/model.user';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })


export class UserService{

    

    constructor(private http : HttpClient) { }

    public getCurrentUser():Observable<User>
    {
        return this.http.get<User>("http://localhost:8085/user/getCurrentUser");
    }

    public updateProfile(user:User):Observable<User>
    {
        return this.http.put<User>("http://localhost:8085/user/updateProfile",user);
    }




}