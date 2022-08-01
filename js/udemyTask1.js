const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', 1)
const a = prompt('один из прследних просмотреных фильмов?','')  
      b = prompt('насколько оценте его?','')
      c = prompt('один из прследних просмотреных фильмов?','')
      d = prompt('насколько оценте его?','')

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;