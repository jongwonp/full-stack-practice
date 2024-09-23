const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../client/dist")));

const { MongoClient } = require("mongodb");

let db;
const url = process.env.DB_URL;
new MongoClient(url)
  .connect()
  .then((client) => {
    console.log("DB연결성공");
    db = client.db("full-stack-practice");
    app.listen(process.env.PORT, () => {
      console.log(`http://localhost:${process.env.PORT} 에서 서버 실행 중`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});

app.post("/api/test", async (req, res) => {
  try {
    if (req.body.title == "" || req.body.content == "") {
      res.send("Please enter the content.");
    } else {
      await db.collection("post").insertOne({
        title: req.body.title,
        content: req.body.content,
      });
      res.redirect("/");
    }
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
  }
});

app.get("/api/list", async (req, res) => {
  const data = await db.collection("post").find().toArray();
  console.log(data);
  res.json(data);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist/index.html"));
});
