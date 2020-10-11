const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const path = require("path");

app.use(express.static(path.join("client", "build")));
app.get("*", (req, res) => res.sendFile("index.html", { root: path.join(__dirname, "client", "build", "index.html") }));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server listening on PORT ${PORT}.`));

let users = [];
let messages = [];

io.on("connect", socket => {
 console.log("Client connected.");

 socket.on("join", user => {
  if (!userExists(user.id)) {
   // Add user to the user list
   users.push(user);

   // Send all clients the updated user list
   io.emit("users", users);

   // Send the new user the chat history
   socket.emit("history", messages);

   // Send everyone but the new user a message that they've joined
   socket.broadcast.emit("message", botMessage(`${user.name} has joined!`));

   console.log(`${user.name} joined.`);
  } else {
   console.log("User already in chat.");
   console.log(users);
  }
 });

 socket.on("disconnect", () => {
  const departingUser = users.find(user => user.id === socket.id) || null;

  if (departingUser) {
   // Remove user from the user list
   users = users.filter(user => user.id !== departingUser.id);

   // Send all remaining clients the updated user list
   socket.broadcast.emit("users", users);

   // Send everyone but the new user a message that they've left
   socket.broadcast.emit("message", botMessage(`${departingUser.name} has left!`));

   console.log(`${departingUser.name} left.`);
  } else {
   console.log("Somebody left... but we have no record they were ever here. A ghost, perhaps?");
  }
 });

 socket.on("message", message => {
  // Only emit the message if user is in the user list
  if (userExists(message.user.id)) {
   io.emit("message", message);

   // Add message to the message history
   messages.push(message);

   console.log(`${message.user.name}: ${message.text}`);
  }
 });
});

function userExists(id) {
 const result = users.find(user => user.id === id);

 return typeof result !== "undefined";
}

function botMessage(text) {
 const message = {
  user: {
   id: "bot",
   name: "ChatBot"
  },
  text: text
 };

 messages.push(message);

 return message;
}
