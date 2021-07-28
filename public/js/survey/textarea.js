const pg = window.location.pathname.substring(
  window.location.pathname.indexOf("/") + 1,
  window.location.pathname.indexOf(".")
);

const timeLoaded = performance.now();
const userAnswer = document.getElementById("answer");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", (e) => {
  if (userAnswer.value === "") {
    e.preventDefault();
    userAnswer.style.border = "thin solid red";
  }
  const timeFinished = performance.now();
  localStorage.setItem(pg, userAnswer.value);
  localStorage.setItem(`${pg}t`, (timeFinished - timeLoaded) / 1000);
});
