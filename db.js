const mongoose = require("mongoose");
const DB_URL = 'mongodb+srv://xamarinbond20:tFJ6trXAq9LsnHXL@luxurycarcluster.ic07iam.mongodb.net/ciaLuxuryFleet?retryWrites=true&w=majority';

const connectdb = () => {
  mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  const db = mongoose.connection;

  db.on("error", console.error.bind(console, "MongoDB connection error:"));
  db.once("open", () => {
    console.log("Connected to MongoDB");
  });
};

module.exports = connectdb
