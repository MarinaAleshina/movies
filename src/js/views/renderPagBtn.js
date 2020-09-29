import userInterfaceElements from "../config/ui.config";
const { paginationContainer } = userInterfaceElements;

export const renderPagBtn = async arrElementsMoviees => {
  let countOfItems = arrElementsMoviees.length;
  let activeBtn;

  for (let i = 1; i <= countOfItems; i++) {
    let btn = document.createElement("button");
    btn.setAttribute("data-page", `${i}`);

    if (i === 1) {
      btn.classList.add("btn", "btn-active");
      activeBtn = btn;
    } else {
      btn.classList.add("btn");
      btn.setAttribute("data-page", `${i}`);
    }

    btn.innerHTML = i;
    paginationContainer.appendChild(btn);
  }

  return activeBtn;
};
