let path = window.location.pathname;
let pageNumber = path.substring(path.indexOf("/") + 1, path.indexOf("."));

let actionNumber;
if (pageNumber == 12) actionNumber = 1;
else if (pageNumber == 15) actionNumber = 2;
else actionNumber = 3;

let answerSelected = false;

// Need nextPageBtn id on every page
const nextPageBtn = document.getElementById("nextPageBtn");
const options = document.querySelectorAll(".option a");

nextPageBtn.addEventListener("click", (e) => {
  if (!answerSelected) {
    e.preventDefault();
    return;
  }
});

options.forEach((option) => {
  option.addEventListener("click", () => {
    let clicked = option.getAttribute("value");
    option.classList.add("selected-option");
    document.querySelectorAll(".option a").forEach((otherOpt) => {
      if (
        otherOpt.classList.contains("selected-option") &&
        otherOpt != option
      ) {
        otherOpt.classList.remove("selected-option");
      }
    });
    localStorage.setItem(`action${actionNumber}a`, clicked);
    answerSelected = true;
    nextPageBtn.style.cursor = "pointer";
  });
});
