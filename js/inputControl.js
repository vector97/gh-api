import listControl from "./listControl.js";
const { addListItem } = listControl();

const inputControl = () => {
  const input = document.querySelector(".search-form__input");
  const results = document.querySelector(".results");
  let data = [];

  let showResults = async ({ target }) => {
    const value = target.value;

    if (value === "") {
      results.classList.add("hidden");
      while (results.firstChild) {
        results.removeChild(results.firstChild);
      }

      return;
    }

    getRepo(value);
  };
  showResults = debounce(showResults, 400);

  input.addEventListener("input", showResults);

  results.addEventListener("click", (e) => {
    if (e.target.closest(".results__item")) {
      const index = e.target.dataset.index;
      addListItem(data.items[index]);
    }

    results.classList.add("hidden");
    input.value = "";
  });

  async function getRepo(value) {
    const URL = `https://api.github.com/search/repositories?q=${value}&per_page=5`;

    try {
      const response = await fetch(URL);
      data = await response.json();

      renderResults(data.items);
    } catch (error) {
      console.error(error);
    }
  }

  function renderResults(data) {
    results.innerHTML = "";

    data.map((item, index) => {
      results.insertAdjacentHTML(
        "beforeend",
        `
          <li class="results__item" data-index=${index}>${item.name}</li>
        `
      );
    });

    results.classList.remove("hidden");
  }

  function debounce(fn, debounceTime) {
    let timeout;

    return function () {
      const fnCall = () => {
        fn.apply(this, arguments);
      };

      clearTimeout(timeout);

      timeout = setTimeout(fnCall, debounceTime);
    };
  }
};

export default inputControl;
