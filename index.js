const express = require("express");
const bodyParser = require("body-parser");
const DBconnect = require("./db");
const SavedNews = require("./model/newModel");

const app = express();

const port = process.env.PORT || 5050;

//MIDDLEWARE
app.use(bodyParser.json());

//CONNECT TO DB
DBconnect();

app.post("/", async (req, res) => {
  try {
    // Create a new user document
    const news = new SavedNews({
      author: req.body.author,
      content: req.body.content,
      description: req.body.description,
      publishedAt: req.body.publishedAt,
      title: req.body.title,
      url: req.body.url,
      urlToImage: req.body.urlToImage,
    });

    // Save the user document to the database
    const savedNews = await news.save();

    // Send a response indicating success
    res.status(201).json(savedNews);
  } catch (error) {
    // Send an error response if there's an issue
    res.status(500).json({ message: error.message });
  }
});

app.get("/", async (req, res) => {
  try {
    const news = await SavedNews.find();
    // Send a response with the retrieved user data
    res.json(news);
  } catch (error) {
    // Send an error response if there's an issue
    res.status(500).json({ message: error.message });
  }
});

app.listen(port, () => `Running on port ${port}`);
