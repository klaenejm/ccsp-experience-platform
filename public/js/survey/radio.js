const pg = window.location.pathname.substring(
  window.location.pathname.indexOf("/") + 1,
  window.location.pathname.indexOf(".")
);

const timeLoaded = performance.now();
const radios = document.getElementsByName("1");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", (e) => {
  const answerSelected = false;

  let userAnswer = "";
  radios.forEach((radio) => {
    if (radio.checked) {
      userAnswer = radio.value;
      answerSelected = true;
    }
  });

  if (!answerSelected) {
    e.preventDefault();
  }

  const timeFinished = performance.now();
  localStorage.setItem(pg, userAnswer);
  localStorage.setItem(`${pg}t`, (timeFinished - timeLoaded) / 1000);
});
