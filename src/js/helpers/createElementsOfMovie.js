import { createElementHtml } from "./createElementHtml";

export const createArrOfElementsMovies = async objOfMovie => {
  let arrOfElements = [];
  let elementsTwelveArr = [];
  const moviesArrFromObj = Object.values(objOfMovie);

  moviesArrFromObj.forEach(movie => {
    const movieElementHtml = createElementHtml(movie);
    elementsTwelveArr.push(movieElementHtml);

    if (elementsTwelveArr.length === 12) {
      arrOfElements.push(elementsTwelveArr);
      elementsTwelveArr = [];
    }
    if (moviesArrFromObj[moviesArrFromObj.length - 1] === movie) {
      arrOfElements.push(elementsTwelveArr);
    }
  });

  return arrOfElements;
};
