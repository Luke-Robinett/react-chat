const app = require("./express-config");
const server = require("http").createServer(app);
const io = require("socket.io")(server);

io.on("connect", () => console.log("Client connected."));

module.exports = server;
