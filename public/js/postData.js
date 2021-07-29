const exitBtn = document.getElementById("exitBtn");

exitBtn.addEventListener("click", (e) => {
  console.log(localStorage);
  const data = {};
  const keys = Object.keys(localStorage);

  for (const key of keys) {
    data[key] = localStorage.getItem(key);
  }

  console.log(data);
  window.location.href = `thankyou.html`;
});
