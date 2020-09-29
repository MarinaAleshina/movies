import "../styles/style";
import { createObjOfMovie } from "./helpers/createObjOfMovies";
import { createArrOfElementsMovies } from "./helpers/createElementsOfMovie";
import { renderPagBtn } from "./views/renderPagBtn";
import userInterfaceElements from "./config/ui.config";
import { createElementHtml } from "./helpers/createElementHtml";
import { onModal } from "./views/modal";
// import { createModal } from "./helpers/createModal";

const {
  movieContainer,
  pagination,
  paginationContainer,
  preloader,
  searchMovie
} = userInterfaceElements;
let objOfMovie;
let arrElementsMovies;
let activePage;

window.addEventListener("unload", () => {
  localStorage.setItem("movies", JSON.stringify(objOfMovie));
});

window.addEventListener("load", async () => {
  objOfMovie = await createObjOfMovie();

  arrElementsMovies = await createArrOfElementsMovies(objOfMovie);

  render(arrElementsMovies[0]);

  activePage = await renderPagBtn(arrElementsMovies);

  const moviesArrFromObj = Object.values(objOfMovie);
  console.log(moviesArrFromObj);

  if (!preloader.classList.contains("js-done")) {
    preloader.classList.add("js-done");
  }

  movieContainer.addEventListener("click", event => {
    const movieElement = event.target.closest(".col");

    if (movieElement) onModal(movieElement, objOfMovie);
  });

  searchMovie.addEventListener("keyup", e => {
    const searchMovies = e.target.value.toLowerCase().trim();

    if (searchMovies) {
      const arrSearchMovies = [];

      const filtered = moviesArrFromObj.filter(movie => {
        return movie.Title.toLowerCase().startsWith(searchMovies);
      });

      filtered.forEach(el => {
        const movieElementHtml = createElementHtml(el);
        arrSearchMovies.push(movieElementHtml);

        return arrSearchMovies;
      });

      render(arrSearchMovies);
    }
  });

  pagination.addEventListener("click", makeList);
});

async function makeList({ target }) {
  let attrPageNum = target.getAttribute("data-page");
  if (!attrPageNum || target.classList.contains("btn-active")) return;
  let activePageAttr = activePage.getAttribute("data-page");

  const btnPagin = paginationContainer.querySelectorAll(".btn");

  if (attrPageNum === "prev") {
    prevPage();
  } else if (attrPageNum === "next") {
    nextPage();
  } else if (attrPageNum === "previos") {
    previosPage();
    render(arrElementsMovies[0]);
  } else if (attrPageNum === "last") {
    lastPage();
    render(arrElementsMovies[arrElementsMovies.length - 1]);
  } else {
    changeActivePage({ target });
    render(arrElementsMovies[attrPageNum - 1]);
  }

  async function prevPage() {
    if (btnPagin[0].classList.contains("btn-active")) return;
    activePage.classList.remove("btn-active");
    btnPagin[activePageAttr - 2].classList.add("btn-active");
    activePage = btnPagin[activePageAttr - 2];
    render(arrElementsMovies[activePageAttr - 2]);
  }

  async function nextPage() {
    if (btnPagin[btnPagin.length - 1].classList.contains("btn-active")) return;
    activePage.classList.remove("btn-active");
    btnPagin[activePageAttr].classList.add("btn-active");
    activePage = btnPagin[activePageAttr];
    render(arrElementsMovies[activePageAttr]);
  }

  async function previosPage() {
    activePage.classList.remove("btn-active");
    btnPagin[0].classList.add("btn-active");
    activePage = btnPagin[0];
  }

  async function lastPage() {
    activePage.classList.remove("btn-active");
    btnPagin[btnPagin.length - 1].classList.add("btn-active");
    activePage = btnPagin[btnPagin.length - 1];
  }
}

async function render(arrElementsMovies) {
  while (movieContainer.firstChild) {
    movieContainer.firstChild.remove();
  }

  movieContainer.insertAdjacentHTML("afterbegin", arrElementsMovies);
}

async function changeActivePage({ target }) {
  activePage.classList.remove("btn-active");
  target.classList.add("btn-active");
  activePage = target;
}
