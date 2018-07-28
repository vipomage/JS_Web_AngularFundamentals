import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Movie } from "../schemas/movie";
import { Movies } from "../schemas/movies";

const apiKey = "9e42889e0ac597c25fe16c446c5d91ed";

@Injectable()
export class MoviesService {
  path: string = "https://api.themoviedb.org/3/";
  popular: string = "discover/movie?sort_by=popularity.desc";
  theaters: string =
    "discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22";
  popularKids: string =
    "discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc";
  bestDrama: string =
    "discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=10";
  search: string = "search/movie";
  authentication: string = `&api_key=${apiKey}`;

  constructor(private http: HttpClient) {}

  getPopular = () =>
    this.http.get<Movie[]>(this.path + this.popular + this.authentication);

  getTheaters = () =>
    this.http.get<Movie[]>(this.path + this.theaters + this.authentication);

  getPopularKids = () =>
    this.http.get<Movie[]>(this.path + this.popularKids + this.authentication);

  getBestDrama = () =>
    this.http.get<Movie[]>(this.path + this.bestDrama + this.authentication);

  getMovie = id =>
    this.http.get<Movie>(
      this.path + `movie/${id}?` + this.authentication.substring(1)
    );

  searchMovies = query =>
    this.http.get<Movies>(this.path + this.search + `?${this.authentication.substring(1)}`+`&query=${query}`);
}
