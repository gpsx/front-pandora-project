const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const controller = require("./controller")
io.on("connection", function(socket) {
    console.log(socket.id);
    
    socket.on("msg", function(data) {
      console.log(data);
      
        socket.broadcast.emit("new-msg", data)
    });

    socket.on("addConversation", function(data) {
      controller.addConversation(data)
    });

    socket.on("getConversation", function(id) {
      msgs = controller.findChatById(id)
      socket.emit("selectedConversation", msgs)
    });

    socket.on("getUserConversation", id => {
      userConversation = controller.userConversation()
      io.to(socket.id).emit("userConversations", userConversation)
    })

});

http.listen(4001, function() {
  console.log("listening on *:4001");
});
