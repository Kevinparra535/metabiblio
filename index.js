import PrintContent from "./src/js/PrintContent.js";

const dropBtn = document.querySelector(".dropBtn");
const menuBtn = document.querySelector(".menu");
const closeBtn = document.querySelector(".close");
const dropdownLinks = document.querySelector(".dropdown__link");
const modalLogin = document.querySelector(".nav__links--primary");
const printContent = new PrintContent();
const api = "./src/js/API.json";

fetch(api)
  .then((response) => response.json())
  .then((data) => printContent.fetchData(data))
  .catch((error) => console.log(error));

dropBtn.addEventListener("click", () =>
  document.querySelector(".dropdown__content").classList.toggle("show")
);

window.onclick = function (event) {
  if (!event.target.matches(".dropBtn")) {
    const dropdowns = document.getElementsByClassName("dropdown__content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

menuBtn.addEventListener("click", () =>
  document.querySelector(".header").classList.add("responsive")
);

closeBtn.addEventListener("click", () =>
  document.querySelector(".header").classList.remove("responsive")
);

dropdownLinks.addEventListener("click", () =>
  alert("Abre un nuevo modal los filtros")
);

modalLogin.addEventListener("click", () =>
  alert("Se abre el modal con el formulario de registro")
);
