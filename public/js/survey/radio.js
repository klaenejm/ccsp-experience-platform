const pg = window.location.pathname.substring(
  window.location.pathname.indexOf("/") + 1,
  window.location.pathname.indexOf(".")
);

const pgNum = Number.parseInt(
  window.location.pathname.substring(
    window.location.pathname.indexOf("_") + 1,
    window.location.pathname.indexOf(".")
  )
);

const timeLoaded = performance.now();
const radios = document.getElementsByName("1");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(function () {
    let answerSelected = false;

    let userAnswer = "";
    radios.forEach((radio) => {
      if (radio.checked) {
        userAnswer = radio.value;
        answerSelected = true;
      }
    });

    if (!answerSelected) {
      return;
    }

    const timeFinished = performance.now();
    localStorage.setItem(pg, userAnswer);
    localStorage.setItem(`${pg}t`, (timeFinished - timeLoaded) / 1000);
    window.location.href = `Survey_${pgNum + 1}.html`;
  }, 100);
});
