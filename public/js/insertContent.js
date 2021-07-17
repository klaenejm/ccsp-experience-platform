let path = window.location.pathname;

let pageNumber = 1;
let lastPage = 25;

if (path !== "/") {
  pageNumber = path.substring(path.indexOf("/") + 1, path.indexOf("."));
}

let template = `
  <img src="assets/map.jpeg" alt="map" />
  <nav>
    <div class="nav-item active">Intelligence Briefing</div>
    <div class="nav-item">Operation Cyber Fortress</div>
    <div class="nav-item">From Cyber Command Mission Leader</div>
  </nav>
  <div class="page">${pageNumber} / ${lastPage}</div>
`;

let leftContainer = document.getElementById("left");

leftContainer.innerHTML = template;

template = `
  <div class="image-container">
    <img
      src="assets/dardania.png"
      alt="crest-of-dardania"
      class="commander-image"
    />
  </div>
  <h1 class="commander">Commander</h1>`;

let header = document.getElementById("top-commander");

header.innerHTML = template;
