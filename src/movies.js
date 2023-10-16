// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  let onlyDirectors = moviesArray.map((eachMovie) => {
    return eachMovie.director;
  });

  return onlyDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  let filteredSpielberg = moviesArray.filter((eachElement) => {
    if (
      eachElement.director === "Steven Spielberg" &&
      eachElement.genre.includes("Drama")
    ) {
      return true;
    } else {
      return false;
    }
  }).length;

  return filteredSpielberg;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  let avgScore = moviesArray.reduce((acc, eachElement) => {
    if (eachElement.score) {
      return acc + eachElement.score / moviesArray.length;
    } else {
      return acc;
    }
  }, 0);

  return Number(avgScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  let avgScore = moviesArray.reduce((acc, eachElement) => {
    if (eachElement.score && eachElement.genre.includes("Drama")) {
      return acc + eachElement.score / moviesArray.length;
    } else {
      return acc;
    }
  }, 0);

  return Number(avgScore.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(moviesArray) {
  let cloneMovies = JSON.parse(JSON.stringify(moviesArray));
  cloneMovies.sort((elem1, elem2) => {
    if (elem1.year > elem2.year) {
      return 1;
    } else if (elem2.year > elem1.year) {
      return -1;
    } else {
      if (elem1.title > elem2.title) {
        return 1;
      } else if (elem2.title > elem1.title) {
        return -1;
      } else {
        return 0;
      }
    }
  });

  return cloneMovies;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  let cloneMovies = JSON.parse(JSON.stringify(moviesArray));

  let filteredTitles = cloneMovies.map((justTitle) => {
    return justTitle.title;
  });

  filteredTitles.sort();

  if (filteredTitles.length > 20) {
    return filteredTitles.slice(0, 20);
  }

  return filteredTitles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
