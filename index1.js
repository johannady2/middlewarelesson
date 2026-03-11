import express from "express";//this
import { dirname } from "path";//this is needed to get the directory name of the current module
import { fileURLToPath } from "url"; //this converts the URL to a file path
import bodyParser from "body-parser"; //this is needed to parse the body of the request
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));//extended: true allows for rich objects and arrays to be encoded into the URL-encoded format, which can be useful for complex data structures.
app.use(bodyParser.json());


app.post("/submit", (req, res) => {
  console.log(`req.body: ${JSON.stringify(req.body)}`);
  console.log(req.body);
  //res.send("Form submitted successfully!");
 //res.sendFile(__dirname + "/public/submit.html");
});

// parse application/json
/*//ignnore this part. haven't studied this yet.

app.use(bodyParser.json());

app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(String(JSON.stringify(req.body, null, 2)))
})*/

app.get("/", (req, res) => {
  //console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});/*
In Express:
- req = the incoming request from the client (browser, form, Postman, etc.)
- res = the outgoing response you send back to the client
They are just objects, but extremely important ones.
*/ 

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
