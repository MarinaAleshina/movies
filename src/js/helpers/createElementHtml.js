export const createElementHtml = ({ imdbID, Poster, Title, Year }) => {
  return `<div class="col" data-id="${imdbID}">
            <div class="product-list__item-wrap">
              <div class="poster">
                <div
                  class="poster-img"
                  style='background-image: url("${Poster}");'
                ></div>
                </div>
                <div class="poster-hover">
                  <div>
                    <h3>${Title}</h3>
                    <div class="lead">${Year}</div>
                  </div>
                </div>  
            </div>
          </div>
        `;
};
