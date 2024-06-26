import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // },
  {
    path: 'login', component:LoginComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
