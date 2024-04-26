import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  { 
    path:'', redirectTo:'login', pathMatch:'full' 
  },
  {
    path: 'login', component:LoginComponent 
  },
  {
    path: 'signup',component:SingupComponent
  },
  {
    path: 'home',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
