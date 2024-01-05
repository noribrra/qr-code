import Express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const _direname = dirname(fileURLToPath(import.meta.url));

const app = Express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(_direname + "/index.html");
});
app.post("/check", (req, res) => {
  if (req.body.password === "nor") {
    res.sendFile(_direname + "/check.html");
  } else {
    res.sendFile(_direname + "/index.html");
  }
});

app.listen(port, () => {
  console.log("server is running on port " + port);
});
