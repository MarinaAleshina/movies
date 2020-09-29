import userInterfaceElements from "../config/ui.config";
import { createModal } from "../helpers/createModal";

const { modal } = userInterfaceElements;

export const onModal = function onModal(movieElement, objOfMovie) {
  const id = movieElement.dataset.id;
  const moviesArrFromObj = Object.values(objOfMovie);

  let fragment = "";

  moviesArrFromObj.forEach(el => {
    if (id === el.imdbID) {
      const modalel = createModal(el);
      fragment += modalel;

      const totalStars = 10;
      const starRaiting = el.Ratings[1]["Value"];
    }
  });

  modal.classList.add("open-modal");

  modal.insertAdjacentHTML("afterbegin", fragment);

  modal.addEventListener("click", onCloseModal);
};

function onCloseModal({ target }) {
  if (target.classList.contains("modal-close")) {
    modal.classList.remove("open-modal");
    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }
  }
}
