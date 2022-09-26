import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MyDashboardComponent } from './my-dashboard/my-dashboard.component';
import { UsersTodoComponent } from './users-todo/users-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { ReuseButtonComponent } from './reuse-button/reuse-button.component';
import { HeaderComponent } from './header/header.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ReactiveInputsComponent } from './shared/reactive-inputs/reactive-inputs.component';
import { MyPasswordInputComponent } from './shared/my-password-input/my-password-input.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    MyDashboardComponent,
    UsersTodoComponent,
    ReuseButtonComponent,
    HeaderComponent,
    DropdownComponent,
    ReactiveInputsComponent,
    MyPasswordInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
