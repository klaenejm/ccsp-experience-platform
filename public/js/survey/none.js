const pg = window.location.pathname.substring(
  window.location.pathname.indexOf("/") + 1,
  window.location.pathname.indexOf(".")
);

const timeLoaded = performance.now();
const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", (e) => {
  const timeFinished = performance.now();
  localStorage.setItem(`${pg}t`, (timeFinished - timeLoaded) / 1000);
});
