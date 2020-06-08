const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

io.on("connection", function(socket) {
    console.log(socket.id);
    
    socket.on("msg", function(data) {
        console.log(data)
        socket.emit("new-msg", data)
    });
});

http.listen(4001, function() {
  console.log("listening on *:4001");
});