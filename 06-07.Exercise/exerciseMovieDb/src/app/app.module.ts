import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutesModule } from "./app.routing";
import {FormsModule} from "@angular/forms";

import { AppComponent } from "./app.component";
import { MoviesComponent } from "./movies/movies.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { MovieComponent } from "./movie/movie.component";
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { DetailsComponent } from "./details/details.component";

import { MoviesService } from "./service/movies.service";

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    NavigationComponent,
    MovieComponent,
    JumbotronComponent,
    DetailsComponent
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutesModule,FormsModule],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
