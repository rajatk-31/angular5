import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Route } from "@angular/router";
import { HttpModule } from "@angular/http";
import { AfterLoginComponent } from './after-login/after-login.component';
import { ErrorComponent } from './error/error.component';
import { LoginService } from './login.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    AfterLoginComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: LoginComponent
    }, {
      path: 'register',
      component: RegistrationComponent
    }, {
      path: 'home',
      component: AfterLoginComponent
    }, {
      path: '**',
      component: ErrorComponent
    }])
  ],
  providers: [
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
