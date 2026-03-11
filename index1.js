import express from "express";
import { dirname } from "path";//this is needed to get the directory name of the current module
import { fileURLToPath } from "url"; //this converts the URL to a file path
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
