const listControl = () => {
  const list = document.querySelector(".list");

  list.addEventListener("click", ({ target }) => {
    if (target.closest(".repo__delete")) {
      target.closest(".repo").remove();
    }
  });

  function addListItem(item) {
    list.insertAdjacentHTML(
      "beforeend",
      `
        <li class="list__item repo">
          <ul class="repo__info info">
            <li class="info__item">
              <a href="${item.html_url}" target="_blank" rel="noopener noreferrer">
                ${item.name}
              </a>
            </li>
            <li class="info__item">Owner: ${item.owner.login}</li>
            <li class="info__item">Stars: ${item.stargazers_count}</li>
          </ul>

          <button class="repo__delete" type="button"></button>
        </li>
      `
    );
  }

  return { addListItem };
};

export default listControl;
