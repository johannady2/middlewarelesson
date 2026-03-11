import express from "express";
import {dirname} from "path";
import {fileURLToPath} from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

const logger = (req, res, next) => {

  console.log(`req.method: ${req.method} , req.url:${req.url}, statusCode: ${res.statusCode}  `);
  next();
}

app.use(logger);



app.get("/", (req, res) => {
  //res.send("Hello");
  res.sendFile(__dirname + "/public/index.html");

});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
