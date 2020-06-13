const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const {MongoClient} = require('mongodb');
const uri =  "mongodb+srv://revista-0dbzg.mongodb.net/Revista"
const client = new MongoClient(uri);
const controller = require("./controller")
await client.connect();
await listDatabases(client);

global.msgs = {
    conversations = []
}

io.on("connection", function(socket) {
    console.log(socket.id);
    
    socket.on("msg", function(data) {
        console.log(data)
        socket.broadcast.emit("new-msg", data)
    });

    socket.on("addConversation", function(data) {
      controller.addConversation(data)
  });
});

http.listen(4001, function() {
  console.log("listening on *:4001");
});
