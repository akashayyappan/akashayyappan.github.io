import { Component, OnInit } from '@angular/core';
import { CommonService } from './service/common.service';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import Validator from "validator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Invoice';

  public modal:boolean;
  public loginWindow:boolean;

  public loginForm:FormGroup;
  public submitClicked:boolean;

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

    this.loginForm = this.fb.group({
      email: ['',[Validators.required,this.validateEmail]],
      password: ['',Validators.required]
    })

  }

  validateEmail(con:FormControl){
    return Validator.isEmail(con.value)
  }

  onLogin(){
    this.cs.setModal(true);
    this.cs.setEnableLoginWindow(true);
  }

  onLoginFormSubmit(){
    this.cs.webServiceCall("post","user/login",this.loginForm.value).subscribe(data => {
      console.log(data);
    })
  }
}
