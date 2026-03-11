import express from "express";//this
import { dirname } from "path";//this is needed to get the directory name of the current module
import { fileURLToPath } from "url"; //this converts the URL to a file path
import bodyParser from "body-parser"; //this is needed to parse the body of the request
const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));//extended: true allows for rich objects and arrays to be encoded into the URL-encoded format, which can be useful for complex data structures.
app.use(bodyParser.json());

const bandNameGenerator = (req, res, next)  =>{
  const data = req.body;//example: { street: 'Daiganjichou', pet: 'Jollibee and Chikka' };
  const keys = Object.keys(data); //this will give us an array of the keys in the data object. In this case, it will be ["street", "pet"].
  let name = "";
  console.log(`req.body: ${JSON.stringify(req.body)}`); 
  console.log(`the POST keys are ${keys}`);//["street","pet"]

      keys.forEach((key) =>
        {
            console.log(`the value of the key- ${key} is: ${data[key]}`);
            name += `${data[key]} `;//this will give us the value of each key in the data object. In this case, it will be "Daiganjichou" for the "street" key and "Jollibee and Chikka" for the "pet" key.
        });

       req.theFinalBandName = name.slice(0, -1);


        next();
};

// parse application/x-www-form-urlencoded


app.use(bandNameGenerator);
app.post("/submit", (req, res) => {
  console.log(`<h1> Your band name is:</h1> <p>${req.theFinalBandName}</p>`); 
  res.send(`<h1> Your band name is:</h1> <p>${req.theFinalBandName}</p>`);
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
