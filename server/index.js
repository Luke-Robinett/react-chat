const express = require("express");
require("./config");
const path = require("path");
const router = require("./controllers");

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server);
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "..", "client", "dist")));
app.use(router);

io.on("connect", () => console.log("Client connected."));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html")));

server.listen(PORT, () => console.log(`Server listening on PORT ${PORT}.`));
