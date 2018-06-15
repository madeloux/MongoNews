const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");

const db = require("./models");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

mongoose.connect("mongodb://localhost/MongoNews");

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
