const express = require("express");
const bodyParser = require("body-parser");
const DBconnect = require("./db");
const SavedNews = require("./model/newModel");
const Users = require("./model/userRegistration");
const userRegistration = require('./routes/userRoute')

const app = express();

const port = process.env.PORT || 5050;

//MIDDLEWARE
app.use(bodyParser.json());

//CONNECT TO DB
DBconnect();

// ROUTING
app.use('/api/v1', userRegistration)

// app.get("/", async (req, res) => {
//   try {
//     const news = await SavedNews.find();
//     // Send a response with the retrieved user data
//     res.json(news);
//   } catch (error) {
//     // Send an error response if there's an issue
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/", async (req, res) => {
//   try {
//     // Create a new user document
//     const news = new SavedNews({
//       user: req.body.user,
//       author: req.body.author,
//       content: req.body.content,
//       description: req.body.description,
//       publishedAt: req.body.publishedAt,
//       title: req.body.title,
//       url: req.body.url,
//       urlToImage: req.body.urlToImage,
//     });

//     // Save the user document to the database
//     const savedNews = await news.save();

//     // Send a response indicating success
//     res.status(201).json(savedNews);
//   } catch (error) {
//     // Send an error response if there's an issue
//     res.status(500).json({ message: error.message });
//   }
// });

// app.post("/user", async (req, res) => {
//   const data = await req.body;
//   try {
//     // Create a new user document
//     const user = new Users({
//       firstname: data.firstname,
//       lastname: data.lastname,
//       email: data.email,
//       password: data.password,
//     });
//     // Save the user document to the database
//     const savedUser = await user.save();

//     //Send a response indicating success
//     res.status(201).json(savedUser);
//   } catch (error) {
//     // Send an error response if there's an issue
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get("/user/:id", async (req, res) => {
//   try {
//     const savedNews = await SavedNews.find({ user: req.params.id }).exec();
//     if (!savedNews || savedNews.length == 0) {
//       res.status(404).json({ message: "No result" });
//     }

//     res.json(savedNews);
//   } catch (error) {
//     // Send an error response if there's an issue
//     res.status(500).json({ message: error.message });
//   }
// });

// app.delete("/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const deletedDocument = await SavedNews.findByIdAndDelete(id);

//     if (!deletedDocument) {
//       // If document with the given ID does not exist
//       return res.status(404).json({ message: "Document not found" });
//     }

//     // If the document was successfully deleted
//     res.json({ message: "Document deleted successfully" });
//   } catch (error) {
//     // Handle errors

//     console.error("Error deleting document:", error);

//     res.status(500).json({ message: "Internal server error" });
//   }
// });

app.listen(port, () => `Running on port ${port}`);
