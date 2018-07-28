import { Component, OnInit, Input } from "@angular/core";
import { MoviesService } from "../service/movies.service";

@Component({
  selector: "app-jumbotron",
  templateUrl: "./jumbotron.component.html",
  styleUrls: ["./jumbotron.component.css"]
})
export class JumbotronComponent implements OnInit {
  private searchResult: Object;
  @Input("searchQuery") searchQuery: string;

  constructor(private movieService: MoviesService) {}

  searchAMovie = query => {
    if (query.search !== "") {
      this.movieService
        .searchMovies(query.search)
        .subscribe(data => (this.searchResult = data));
    }
  };

  ngOnInit() {}
}
