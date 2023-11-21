import { createElement } from "./helpers/createElement.js";

const listControl = () => {
  const list = document.querySelector(".list");

  list.addEventListener("click", ({ target }) => {
    if (target.closest(".repo__delete")) {
      target.closest(".repo").remove();
    }
  });

  function addListItem(item) {
    const listItem = createElement("li", {
      className: "list__item repo",
    });

    const infoList = createElement("ul", {
      className: "repo__info info",
    });

    const nameItem = createElement("li", {
      className: "info__item",
    });
    const nameLink = createElement("a", {
      href: item.html_url,
      target: "_blank",
      rel: "noopener noreferrer",
      innerText: item.name,
    });
    nameItem.appendChild(nameLink);

    const ownerItem = createElement("li", {
      className: "info__item",
      innerText: `Owner: ${item.owner.login}`,
    });

    const starsItem = createElement("li", {
      className: "info__item",
      innerText: `Stars: ${item.stargazers_count}`,
    });

    infoList.appendChild(nameItem);
    infoList.appendChild(ownerItem);
    infoList.appendChild(starsItem);

    const deleteButton = createElement("button", {
      className: "repo__delete",
      type: "button",
    });

    listItem.appendChild(infoList);
    listItem.appendChild(deleteButton);

    list.append(listItem);
  }

  return { addListItem };
};

export default listControl;
