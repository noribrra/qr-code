import Express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const _direname = dirname(fileURLToPath(import.meta.url));

const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("index.ejs", {
    day: "weekday",
    advic: "its time to work hard",
  });
});
app.listen(port, () => {
  console.log("server is running on port " + port);
});
