import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { InputComponent } from './input/input.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { UsersTodoComponent } from './users-todo/users-todo.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginComponent },
  { path: 'SignUp', component: SignupComponent },
  { path: 'input', component: InputComponent },
  { path: 'my-dashboard', component: MyDashboardComponent },
  { path: 'users-todo', component: UsersTodoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
