import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectHome = () => redirectLoggedInTo(['home'])
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  },
  {
    path: 'login',
    component: LoginComponent,
    ...canActivate(redirectHome)
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectHome)
  },
  {
    path: 'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
