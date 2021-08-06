const exitBtn = document.getElementById("exitBtn");
const requiredKeys = [
  "Survey_8t",
  "Survey_9",
  "Survey_22t",
  "Survey_23t",
  "Survey_30",
  "page1t",
  "Survey_18t",
  "Survey_19t",
  "page16t",
  "page9t",
  "Survey_5t",
  "Survey_17",
  "Survey_3",
  "Survey_28t",
  "Survey_22",
  "Survey_26t",
  "Survey_26",
  "Survey_21",
  "Survey_7t",
  "page7t",
  "Survey_25",
  "action1a",
  "Survey_12",
  "Survey_29",
  "Survey_5",
  "page14t",
  "Survey_1t",
  "Survey_14",
  "Survey_2t",
  "page6t",
  "Survey_10t",
  "Survey_15",
  "Survey_20t",
  "Survey_23",
  "Survey_14t",
  "page13t",
  "action3a",
  "page3t",
  "Survey_3t",
  "Survey_13t",
  "Survey_8",
  "Survey_7",
  "Survey_4",
  "page8t",
  "Survey_10",
  "Survey_27t",
  "Survey_19",
  "Survey_18",
  "page12t",
  "Survey_4t",
  "Survey_25t",
  "Survey_29t",
  "Survey_12t",
  "Survey_30t",
  "action2a",
  "Survey_11t",
  "Survey_20",
  "Survey_28",
  "page4t",
  "Survey_21t",
  "Survey_16",
  "page15t",
  "page5t",
  "Survey_27",
  "Survey_2",
  "page2t",
  "Survey_9t",
  "Survey_24t",
  "page11t",
  "Survey_16t",
  "page10t",
  "Survey_17t",
  "Survey_15t",
  "Survey_6t",
];

requiredKeys.forEach((key) => {
  if (!localStorage.getItem(key)) {
    localStorage.setItem(key, "Failed to capture this field");
  }
});

exitBtn.addEventListener("click", (e) => {
  const data = {};
  const keys = Object.keys(localStorage);

  for (const key of keys) {
    data[key] = localStorage.getItem(key);
  }

  const orderedData = Object.keys(data)
    .sort()
    .reduce((obj, key) => {
      obj[key] = data[key];
      return obj;
    }, {});

  const url = "/results";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderedData),
  });

  window.location.href = `thankyou.html`;
});
