import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/service/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  public nameFeild:boolean; 
  public projName:string;

  constructor(private cs:CommonService, private router:Router) { }

  ngOnInit() {
  }

  createProject(){
    let payload = {
      name: this.projName
    }
    this.cs.webServiceCall("post","/project/create",payload).subscribe(data => {
      this.cs.currentProj = data;
      this.router.navigateByUrl("/project")
    })
  }

}
