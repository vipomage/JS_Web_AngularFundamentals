import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { RegisterFormComponent } from "./authentication/register-form/register-form.component";
import { LoginFormComponent } from "./authentication/login-form/login-form.component";
import { HomeComponent } from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
  { path: "", component: RegisterFormComponent },
  { path: "welcome", component: HomeComponent },
  { path: "register", component: RegisterFormComponent },
  { path: "login", component: LoginFormComponent },
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutesModule {}
