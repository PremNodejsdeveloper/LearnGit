const express = require("express");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.end("you are at home page my dear");
});

app.listen(port, () => {
  console.log(`server is listening at port ${port}`);
});

module.exports = app;
