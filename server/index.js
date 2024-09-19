const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "../client/dist")));

app.listen(3000, () => {
  console.log("http://localhost:3000 에서 서버 실행 중");
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.get("/api/hi", (req, res) => {
  res.json({ abc: "hi" });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});
