import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { MoviesComponent } from "./movies/movies.component";
import { JumbotronComponent } from "./jumbotron/jumbotron.component";
import { DetailsComponent } from "./details/details.component";

const routes: Routes = [
  { path: "", component: MoviesComponent },
  { path: "details/:id", component: DetailsComponent },
  { path: "search/details/:id", component: DetailsComponent },
  { path: "search",  component: JumbotronComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutesModule {}
