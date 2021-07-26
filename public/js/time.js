let startTime = performance.now();

console.log(localStorage);

let pg = 1;

if (window.location.pathname !== "/") {
  pg = window.location.pathname.substring(
    window.location.pathname.indexOf("/") + 1,
    window.location.pathname.indexOf(".")
  );
}

// When going to next page, log time
document.getElementById("nextPageBtn").addEventListener("click", () => {
  let endTime = performance.now();
  localStorage.setItem(`page${pg}t`, (endTime - startTime) / 1000);
});
