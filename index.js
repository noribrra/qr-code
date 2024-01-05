import Express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import morgan from "morgan";

const _direname = dirname(fileURLToPath(import.meta.url));

const app = Express();
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("combined"));
app.post("/login", (req, res) => {
  console.log(req.body);
});
app.get("/", (req, res) => {
  res.sendFile(_direname + "/index.html");
});

app.get("/about", (req, res) => {
  res.send("<p>i am a fullstack developer</p>");
});

app.get("/contact", (req, res) => {
  res.send("+963994595431");
});
app.listen(port, () => {
  console.log("server is running on port " + port);
});
