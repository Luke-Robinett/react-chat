const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/chat', {
 useNewUrlParser: true,
 useUnifiedTopology: true
})
 .then(() => console.log("Connected to chat database."))
 .catch(err => console.error(err));
