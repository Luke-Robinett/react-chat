const app = require("./express-config");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connect", socket => {
 console.log("Client connected.");

 socket.on("join", room => socket.join(room)
 .to(room).emit("status",)
 );

 socket.on("message", message => {
  io.emit("message", message);
 });
});

module.exports = server;
