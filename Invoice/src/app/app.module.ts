import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ErrorComponent } from './component/error/error.component';

import { CommonService} from './service/common.service';
import { DashboardComponent } from './component/dashboard/dashboard.component'
import { LoginGuard } from './service/login.guards';
import { ProjectComponent } from './component/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent,
    DashboardComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CommonService,LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
