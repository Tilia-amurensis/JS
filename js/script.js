"use strict";

/*let userName = "John";
let userNumber = 25
userNumber = 24;

const storeName = "Ababa"
const storeDescription =  {
    budget: 10000,
    employees: ['Kate', 'Mot', 'Barbara'],
    products: {
        'bread': 20,
        'cak+e': 25,
        },
    open: true
}*/

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









