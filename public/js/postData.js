const exitBtn = document.getElementById("exitBtn");

exitBtn.addEventListener("click", (e) => {
  console.log(localStorage);
  const data = {};
  const keys = Object.keys(localStorage);

  for (const key of keys) {
    data[key] = localStorage.getItem(key);
  }

  const url = "http://localhost:3000/results";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  window.location.href = `thankyou.html`;
});
