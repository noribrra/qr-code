import Express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";

const _direname = dirname(fileURLToPath(import.meta.url));

const app = Express();
const port = 3000;
function login(req, res, next) {
  console.log("method is " + req.method);
  console.log("url is " + req.url);
  next();
}
app.use(login);
app.post("/login", (req, res) => {
  res.send({
    email: req.body.email,
    password: req.body.password,
  });
  //   console.log(req.body);
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
