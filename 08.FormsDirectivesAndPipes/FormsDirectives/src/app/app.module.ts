import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";
import { TemplateDrivenFormComponent } from "./template-driven-form/template-driven-form.component";

@NgModule({
  declarations: [AppComponent, TemplateDrivenFormComponent],
  imports: [BrowserModule, FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
