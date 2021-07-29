const express = require("express");
const fs = require("fs");
const app = express();
const port = 8081;

app.use(express.static("public"));
app.use(express.json());

app.post("/results", (req, res) => {
  const result = req.body;
  fs.readFile("./data/db.json", function (err, data) {
    const json = JSON.parse(data);
    json.results.push(result);
    fs.writeFile("./data/db.json", JSON.stringify(json), (err) => {
      if (err) throw err;
    });
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
