import { CanActivate } from '@angular/router';
import { CommonService } from 'src/app/service/common.service';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(private cs:CommonService){}
    
    public canActivate():boolean{
        return this.cs.isLoggedIn;
    }
}