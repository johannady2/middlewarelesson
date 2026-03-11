import express from "express";
import morgan from "morgan";
import { dirname } from "path";//this is needed to get the directory name of the current module
import { fileURLToPath } from "url"; //this converts the URL to a file path

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


app.use(morgan("tiny", (req,res) => {
  console.log(`tesing: ${req.method} ${req.url} ${res.statusCode}`);
}));




app.get("/", (req, res) => {
  //res.send("Hello");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
