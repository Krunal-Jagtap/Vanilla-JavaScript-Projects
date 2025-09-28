// Filter -

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let graterNumbers = numbers.filter((value) => value > 4);

let lessNumbers = numbers.filter((value) => {
  return value < 4;
});

console.log(graterNumbers); // [ 5, 6, 7, 8, 9, 10 ]
console.log(lessNumbers); // [ 1, 2, 3 ]

const MOVIES = [
  {
    title: "Movie 1",
    type: "Science",
    releasedDate: 1986,
  },
  {
    title: "Movie 2",
    type: "Animated",
    releasedDate: 2019,
  },
  {
    title: "Movie 3",
    type: "Horror",
    releasedDate: 1994,
  },
  {
    title: "Movie 4",
    type: "Science",
    releasedDate: 1966,
  },
  {
    title: "Movie 5",
    type: "Animated",
    releasedDate: 1993,
  },
  {
    title: "Movie 6",
    type: "Horror",
    releasedDate: 1999,
  },
];

const HORROR_MOVIES = MOVIES.filter((film) => {
  return film.type === "Horror";
});

console.log(HORROR_MOVIES);
/*
[
  { title: 'Movie 3', type: 'Horror', releasedDate: 1994 },
  { title: 'Movie 6', type: 'Horror', releasedDate: 1999 }
]
*/

const HORROR_ANIMATED_MOVIES = MOVIES.filter((film) => {
  return film.type === "Animated" && film.releasedDate > 2000;
});

console.log(HORROR_ANIMATED_MOVIES);
// [ { title: 'Movie 2', type: 'Animated', releasedDate: 2019 } ]
