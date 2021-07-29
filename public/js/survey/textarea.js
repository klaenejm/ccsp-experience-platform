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
const userAnswer = document.getElementById("answer");
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", (e) => {
  e.preventDefault();
  setTimeout(function () {
    if (userAnswer.value === "") {
      userAnswer.style.border = "thin solid red";
      return;
    }

    const timeFinished = performance.now();
    localStorage.setItem(pg, userAnswer.value);
    localStorage.setItem(`${pg}t`, (timeFinished - timeLoaded) / 1000);
    window.location.href = `Survey_${pgNum + 1}.html`;
  }, 100);
});
