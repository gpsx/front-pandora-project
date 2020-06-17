const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const controller = require("./controller")
io.on("connection", function(socket) {
    console.log(socket.id);
    
    socket.on("msg", function(data) {
      console.log(data, "newMsgrs");
      controller.addMessage(data)
      socket.broadcast.emit("new-msg", data)
    });

    socket.on("addConversation", function(data) {
      console.log(data);
      controller.addConversation(data)
    });

    socket.on("getConversation", function(id) {
      msgs = controller.findChatById(id)
      socket.emit("selectedConversation", msgs)
    });

    socket.on("getUserConversation", id => {
      console.log(id);
      userConversation = controller.userConversation(id)
      io.to(socket.id).emit("userConversations", userConversation)
    })

    socket.on("userConnect", id => {
      console.log(id);
      //controller.setUserOnline(id)
    })

    socket.on("userDisconnect", id => {
      console.log(id, "desconectado");
      //controller.setUserOff(id)
    })

});

http.listen(4001, function() {
  console.log("listening on *:4001");
});
