const booksHTML = document.querySelector(".categorie__grid");

class PrintContent {
  fetchData(data) {
    data.forEach((item) => {
      let itemHTML = this.print(item.title, item.thumbnail, item.rating);
      booksHTML.innerHTML += itemHTML;
    });
  }

  print(title, thumbnail, rating) {
    return `<div class="card">
              <img
                src="${thumbnail}"
                alt="${title}"
                title="${title}"
              />
              <div class="card__text">
              <p>${title}</p>
              <span>${rating}</span>
              </div>
            </div>`;
  }
}

export default PrintContent;
