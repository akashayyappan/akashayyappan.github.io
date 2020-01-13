import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public _modal:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public _enableLoginWindow:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http:HttpClient) { }

  public setModal(val:boolean){
    this._modal.next(val);
  }

  public setEnableLoginWindow(val:boolean){
    this._enableLoginWindow.next(val);
  }

  public webServiceCall(method:string ,url:string, payload:JSON){
    switch(method){
      case "get":
        return this.http.get(environment.serviceURL+url);
      case "post":
        return this.http.post(environment.serviceURL+url,payload);
    }
  }
}
