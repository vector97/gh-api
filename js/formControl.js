const formControl = () => {
  const searchForm = document.querySelector(".search-form");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });
};

export default formControl;
