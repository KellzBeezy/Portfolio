const express = require("express");
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = process.env.PORT || 5000;

app.use(express.static(__dirname + "/public"));

let clients = 0;

io.on("connection", (socket) => {
  socket.on("NewClient", function () {
    if (clients < 2) {
      if (clients == 1) {
        this.emit("CreatePeer");
      }
    } else {
      this.emit("SessionActive");
    }
    clients++;
  });
  socket.on("Offer", sendOffer);
  socket.on("Answer", sendAnswer);
  socket.on("disconnect", Disconnect);
});

function Disconnect() {
  if (clients > 0) {
    clients--;
  }
}

function sendAnswer(data) {
  this.broadcast.emit("BackAnswer", data);
}

function sendOffer(offer) {
  this.broadcast.emit("BackOffer", offer);
}

http.listen(port, () => console.log(`Listening on ${port}`));
