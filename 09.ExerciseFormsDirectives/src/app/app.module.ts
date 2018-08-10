import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { AppRoutesModule } from "./app.routing";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RegisterFormComponent } from "./authentication/register-form/register-form.component";
import { LoginFormComponent } from "./authentication/login-form/login-form.component";

import { AuthenticationService } from "./authentication/authentication.service";
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterFormComponent,
    LoginFormComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [BrowserModule, ReactiveFormsModule, HttpClientModule, RouterModule,AppRoutesModule],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {}
