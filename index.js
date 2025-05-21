import express from "express";
import bodyParser from "body-parser";
import sillyName from "sillyname";
import random_name from "node-random-name";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {  
  var firstName = sillyName();
  var lastName = random_name({ last: true });
  var generatedRandomBandName = firstName + " " + lastName;
  res.render("index.ejs", { randomBandName: generatedRandomBandName });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
