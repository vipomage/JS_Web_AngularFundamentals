import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "../schemas/movie";

const apiKey = "9e42889e0ac597c25fe16c446c5d91ed";

@Injectable()
export class MoviesService {
  path: string = "https://api.themoviedb.org/3/";
  popular: string = "discover/movie?sort_by=popularity.desc";
  theaters: string =
    "discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22";
  authentication: string = "&api_key=";

  constructor(private http: HttpClient) {}

  getPopular = () =>
    this.http.get<Movie[]>(
      this.path + this.popular + this.authentication + apiKey
    );

  getTheaters = () =>
    this.http.get<Movie[]>(
      this.path + this.theaters + this.authentication + apiKey
    );
}
