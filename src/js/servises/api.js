export const getMovie = async id => {
  try {
    let response = await fetch(
      `http://www.omdbapi.com/?i=${id}&apikey=d7719d96`
    );
    response = await response.json();
    return response;
  } catch (error) {
    console.error(error);
  }
};
