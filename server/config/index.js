const mongoose = require("mongoose");

const connectionString = "mongodb://localhost/chat";

mongoose.connect(connectionString, {
 useNewUrlParser: true,
 useUnifiedTopology: true
})
 .then(() => console.log("Connected to chat database."))
 .catch(err => console.error(err));
