export const createModal = function createModal({
  Poster,
  Title,
  Plot,
  Year,
  Runtime,
  Type,
  Genre,
  Production,
  Country,
  Director,
  Writer,
  Actors,
  Awards,
  Ratings
}) {
  return `
  <div class="modal-window">
          <div class="modal-header">
            <span class="modal-title">Movie view</span>
            <span class="modal-close">&times;</span>
          </div>
          <div class=" modal-body">
            <div class="modal-content">
              <div class="modal-sidebar">
                <div class="modal-sidebar__wrapper">
                  <div class="poster"><img src="${Poster}" alt="Poster"/></div>
                </div>
              </div>
              <div class="modal-content__movie-info">
                <h3 class="movie-title">${Title}</h3>
                <div id="app">
                 
                  <div class="ratings" data-rating='${Ratings[1]["Value"]}'>
                    <div class="stars-outer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" class="svg-inline--fa fa-star fa-w-18 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>
                  </div>
                    ${Ratings[0]["Value"]}
                </div>
                <div class="lead">
                  ${Plot}
                </div>
                <div class="movie-info">
                  <span class="movie-info__block">${Year}</span>
                  <span class="movie-info__block">${Runtime}</span>
                  <span class="movie-info__block">${Genre}</span>
                </div>
                <table class="table">
                  <tbody>
                    <tr>
                      <th>Production</th>
                      <td>${Production}</td>
                    </tr>
                    <tr>
                      <th>Country</th>
                      <td>${Country}</td>
                    </tr>
                    <tr>
                      <th>Director</th>
                      <td>${Director}</td>
                    </tr>
                    <tr>
                      <th>Writer</th>
                      <td>V${Writer}</td>
                    </tr>
                    <tr>
                      <th>Actors</th>
                      <td>${Actors}</td>
                    </tr>
                    <tr>
                      <th>Awards</th>
                      <td>${Awards}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
  `;
};
