const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const path = require("path");

// Creating a PORT and requiring models to sync
const PORT = process.env.PORT || 3000;
const db = require("./models");


const app = express();
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Set up mongodb in heroku
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

mongoose.connect(MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('Database Connection Successful!!'))
.catch(err => console.error(err));

//Require our api and html routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port http://localhost:${PORT}`);
});

