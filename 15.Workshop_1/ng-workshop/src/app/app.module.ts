import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { SigninComponent } from "./auth/signin/signin.component";
import { HeaderComponent } from "./header/header.component";
import { RecipeCreateComponent } from "./recipe/recipe-create/recipe-create.component";
import { RecipeDetailsComponent } from "./recipe/recipe-details/recipe-details.component";
import { RecipeEditComponent } from "./recipe/recipe-edit/recipe-edit.component";
import { RecipeListComponent } from "./recipe/recipe-list/recipe-list.component";
import { RecipeStartComponent } from "./recipe/recipe-start/recipe-start.component";
import { SignupComponent } from "./auth/signup/signup.component";

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    HeaderComponent,
    RecipeCreateComponent,
    RecipeDetailsComponent,
    RecipeEditComponent,
    RecipeListComponent,
    RecipeStartComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
