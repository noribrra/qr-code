import Express from "express";
const app = Express();
const port = 3000;

app.get("/", (req, res) => {
  res.send({
    name: "nor",
    age: "21",
    status: "200",
  });
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
