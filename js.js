class WebSeries {
  constructor(title, directors, stars, platform) {
    this.title = title.toUpperCase();
    this.directors = directors;
    this.stars = stars;
    this.platform = platform;
  }
  get title() {
    return this._title;
  }
  get directors() {
    return this._directors;
  }
  get stars() {
    return this._stars;
  }
  get platform() {
    return this._platform;
  }
  set title(tt) {
    this._title = tt.toUpperCase();
  }
  set directors(dd) {
    this._directors = dd;
  }
  set stars(ss) {
    this._stars = ss;
  }
  set platform(pp) {
    this._platform = pp;
  }
  displayForm() {
    console.log(`Title: ${this.title}`);
    console.log(`Directors: ${this.directors}`);
    console.log(`Stars: ${this.stars}`);
    console.log(`Platform: ${this.platform}`);
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("directors").value = "";
    document.getElementById("stars").value = "";
    document.getElementById("platform").value = "Select one";
  }
  addCard() {
    const sec = document.querySelector(".section-cards");
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
    <ion-icon class="delete-icon" id="del-icon" name="close"></ion-icon>
    <p class="card-title">${this.title}</p>
    <ul class="card-details">
      <li class="card-dir">${this.directors}</li>
      <li class="card-rating">${this.stars}</li>
      <li class="platform">${this.platform}</li>
    </ul>`;
    sec.appendChild(div);
  }
}
let cards = [
  {
    title: "money heist",
    directors: "Alex pina",
    stars: "7.3",
    platform: "Netflix",
  },
  {
    title: "harry potter",
    directors: "JK Rowling",
    stars: "8.0",
    platform: "Amazon Prime",
  },
  {
    title: "The witchers",
    directors: "Mark Jobst",
    stars: "8.2",
    platform: "Netflix",
  },
  {
    title: "Lockey And KEy",
    directors: "M.Romanek",
    stars: "7.4",
    platform: "Netflix",
  },
  {
    title: "Stranger things",
    directors: "T D Brothers",
    stars: "8.7",
    platform: "Netflix",
  },
  {
    title: "GOT",
    directors: "D. Benioff",
    stars: "9.2",
    platform: "Disney",
  },
];
cards.map((card) => {
  const list = new WebSeries(
    card.title,
    card.directors,
    card.stars,
    card.platform
  );
  list.addCard();
  console.log(card);
});

document.getElementById("button").addEventListener("click", function (e) {
  e.preventDefault();
  const title = document.getElementById("title").value,
    directors = document.getElementById("directors").value,
    stars = document.getElementById("stars").value,
    platform = document.getElementById("platform").value;
  const series = new WebSeries(title, directors, stars, platform);
  cards.push({
    title: title,
    directors: directors,
    stars: stars,
    platform: platform,
  });
  series.displayForm();
  series.clearFields();
  series.addCard();
});

const promise = new Promise((resolve, reject) => {
  const delCard = document.querySelectorAll(".delete-icon");
  delCard.forEach((del) => {
    del.addEventListener("click", function () {
      const parentElement = del.parentElement;
      setTimeout(() => {
        parentElement.remove();
        resolve("Card deleted successfully after 1 minute");
      }, 60000);
    });
  });
});
promise
  .then((result) => {
    console.log("Promise resolved:", result);
  })
  .catch((error) => {
    console.error("Promise rejected:", error);
  });
