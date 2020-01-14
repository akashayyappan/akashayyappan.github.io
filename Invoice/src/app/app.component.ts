import { Component, OnInit } from '@angular/core';
import { CommonService } from './service/common.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Validator from "node_modules/validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Invoice';

  public modal:boolean;
  public loginWindow:boolean;
  public isUserLoggedIn:boolean;
  public showInfoMessage:boolean;
  public infoMessage:string;
  public loginForm:FormGroup;
  public submitClicked:boolean;
  public infoMessageType:boolean;

  constructor(private cs:CommonService, private fb:FormBuilder){}

  ngOnInit(){

    //modal window
    this.cs._modal.subscribe(data => {
      this.modal = data;
      this.cs.setEnableLoginWindow(false);
    })

    //login window
    this.cs._enableLoginWindow.subscribe(data => {
      this.loginWindow = data;
    })

    this.cs._isLoggedIn.subscribe(data => {
      this.isUserLoggedIn = data;
    })

    this.loginForm = this.fb.group({
      email: ['',[Validators.required,this.validateEmail]],
      password: ['',Validators.required]
    })

    this.cs._infoMessage.subscribe(msg => {
      if(!msg["msg"]) return;
      if(msg["type"]) this.infoMessageType = true;
      else this.infoMessageType = false;
      this.infoMessage = msg["msg"];
      this.showInfoMessage = true;
      setTimeout(() => {
        this.showInfoMessage = false
      }, 3000);
    })

    if(window.localStorage.getItem("token")){
      this.cs.webServiceCall("get","user/check").subscribe(data => {
        this.cs.setUser(data);
        this.cs.setUserLoggedIn(true);
        this.cs.showInfoMessage("Logged in using last used credentilas", true);
      })
    }

  }

  validateEmail(con:FormControl){
    return Validator.isEmail(con.value)
  }

  onLogin(){
    this.cs.setModal(true);
    this.cs.setEnableLoginWindow(true);
  }

  onLogout(){
    this.cs.setUserLoggedIn(false);
    window.sessionStorage.clear();
    window.localStorage.clear();
  }

  onLoginFormSubmit(){
    if(!this.loginForm.valid){
      this.cs.showInfoMessage("Please Fill all the fields and try again",false);
    }
    this.cs.webServiceCall("post","user/login",this.loginForm.value).subscribe(data => {
      this.cs.setUserLoggedIn(true);
      this.cs.setUser(data);
      this.cs.setModal(false);
    },err => {
      this.cs.setUserLoggedIn(false)
    })
  }
}
