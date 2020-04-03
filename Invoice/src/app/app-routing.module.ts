import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './component/error/error.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginGuard } from './service/login.guards';
import { ProjectComponent } from './component/project/project.component';


const routes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "project",
    component: ProjectComponent,
    canActivate: [LoginGuard]
  },
  {
    path: "error",
    component: ErrorComponent
  },
  {
    path: "**",
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
