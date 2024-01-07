import Express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";

// qr
import qr from "qr-image";
import fs from "fs";
const app = Express();
const port = 3000;

const _direname = dirname(fileURLToPath(import.meta.url));
console.log(_direname);
app.use(bodyParser.urlencoded({ extended: false }));

// send local image
app.get("/local", (req, res) => {
  res.sendFile(_direname + "/local.png");
});

// home page
app.get("/", (req, res) => {
  res.render(_direname + "/index.ejs", {
    src: "http://localhost:3000/local",
  });
});

// creat qr cod
app.post("/creat", (req, res) => {
  const id = uuidv4();
  const url = req.body.url;

  var qr_svg = qr.image(`${url}`, { type: "png" });
  qr_svg.pipe(fs.createWriteStream(`n${id}.png`));

  setTimeout(() => {
    app.get(`/n${id}`, (req, res) => {
      res.sendFile(_direname + `/n${id}.png`);
    });
  }, 1000);

  setTimeout(() => {
    res.render(_direname + `/index.ejs`, {
      src: `http://localhost:3000/n${id}`,
    });
  }, 1000);
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
