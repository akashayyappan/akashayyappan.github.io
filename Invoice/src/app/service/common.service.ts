import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public _modal: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public _enableLoginWindow: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public _isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public _infoMessage: BehaviorSubject<{}> = new BehaviorSubject<{}>({});

  public NAME: string;
  public EMAIL: string;
  public TOKEN: string;

  constructor(private http: HttpClient) { }

  public setModal(val: boolean) {
    this._modal.next(val);
  }

  public setEnableLoginWindow(val: boolean) {
    this._enableLoginWindow.next(val);
  }

  public setUserLoggedIn(val: boolean) {
    this._isLoggedIn.next(val);
  }

  public setUser(data:Object) {
    this.NAME = data["name"];
    this.EMAIL = data["email"];
    this.TOKEN = data["token"];
    window.sessionStorage.setItem("name", data["name"]);
    window.sessionStorage.setItem("email", data["email"]);
    if(data["token"]) window.localStorage.setItem("token", data["token"]);
  }

  public showInfoMessage(msg:string,type:boolean){
    let message = {
      type: type,
      msg: msg
    }
    this._infoMessage.next(message);
  }

  public webServiceCall(method: string, url: string, payload?: JSON) {
    let header = new HttpHeaders({ 'Authorization': "Bearer " + window.localStorage.getItem("token") });
    const options = {
      headers: header
    };

    switch (method) {
      case "get":
        return this.http.get(environment.serviceURL + url, options);
      case "post":
        return this.http.post(environment.serviceURL + url, payload, options);
    }
  }
}
