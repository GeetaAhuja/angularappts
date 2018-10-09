import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }
  private loginURL = 'http://localhost:5000/books1'
  _isLoggedIn: boolean = false;
  get isLoggedIn(){
    return this._isLoggedIn;
  }
  set isLoggedIn(value:boolean){
    this._isLoggedIn = value;
  }

  public loginUser():any{
    return this.http.get(this.loginURL,{observe: 'response',withCredentials:true});
  }
}
