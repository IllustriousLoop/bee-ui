import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HeroComponent } from './hero/hero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUPComponent } from './sign-up/sign-up.component';
import { ViewUsersComponent } from './view-users/view-users.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUPComponent },
  { path: 'admin', component: ViewUsersComponent },
  { path: 'ordinary', component: DashboardComponent },
  { path: 'home', component: HeroComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
