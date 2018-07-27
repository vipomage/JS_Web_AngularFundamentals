import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HomeModule } from "./home/home.module";
import { AppComponent } from "./app.component";
import { AboutComponent } from "./about/about.component";
import { AppRoutesModule } from "./router/router.module";

@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [BrowserModule, HomeModule, AppRoutesModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
