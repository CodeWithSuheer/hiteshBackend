import express from "express";

const app = express();
const port = 3000;

app.use(express.static("static"));

app.get("/", (req, res) => {
  res.send("Hello Chai Backend");
});

app.listen(port, () => {
  console.log(`Suheer Backend http://localhost:${port}`);
});
