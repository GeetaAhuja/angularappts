import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { Detail1Component } from './components/detail1/detail1.component';
import { Detail2Component } from './components/detail2/detail2.component';
import { GatekeeperGuard } from './gatekeeper.guard';


const routes: Routes = [
  { path: '', redirectTo: '/detail2', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'detail1', component: Detail1Component, canActivate: [GatekeeperGuard]},
  { path: 'detail2', component: Detail2Component, canActivate: [GatekeeperGuard]}
];
@NgModule({
  exports:[ RouterModule ],
  imports: [
    CommonModule,RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }
