//
//   adult
//     :
//     false
//   backdrop_path
//     :
//     "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg"
//   belongs_to_collection
//     :
//     {id: 86311, name: "The Avengers Collection", poster_path: "/qJawKUQcIBha507UahUlX0keOT7.jpg", backdrop_path: "/zuW6fOiusv4X9nnW3paHGfXcSll.jpg"}
//   budget
//     :
//     300000000
//   genres
//     :
//     (4) [{…}, {…}, {…}, {…}]
// homepage
//   :
//   "http://marvel.com/movies/movie/223/avengers_infinity_war_part_1"
// id
//   :
//   299536
// imdb_id
//   :
//   "tt4154756"
// original_language
//   :
//   "en"
// original_title
//   :
//   "Avengers: Infinity War"
// overview
//   :
//   "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain."
// popularity
//   :
//   162.147
// poster_path
//   :
//   "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg"
// production_companies
//   :
//   (2) [{…}, {…}]
// production_countries
//   :
//   [{…}]
// release_date
//   :
//   "2018-04-25"
// revenue
//   :
//   2021970014
// runtime
//   :
//   149
// spoken_languages
//   :
//   [{…}]
// status
//   :
//   "Released"
// tagline
//   :
//   "An entire universe. Once and for all."
// title
//   :
//   "Avengers: Infinity War"
// video
//   :
//   false
// vote_average
//   :
//   8.4
// vote_count
//   :
//   5905

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  homepage: string;
  genres: Array<Object>;
  id: number;
  imdb_id: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}
