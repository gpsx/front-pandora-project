let msgs = require("./data")
console.log(msgs);
let findChatId = (id) => {
    for (let i = 0; i < msgs.conversations; i++) {
        console.log(msgs.conversations[i]);
        
        if (id == msgs.conversations[i].id) {
            return i
        }
    }
    return -1
}
module.exports = {
    addConversation: (users) => {
        msgs.conversations.push({
            id: msgs.conversations.length,
            users,
            chat: [] 
        })
        console.log(msgs);
    },
    findByUserChatId: (id) => {
        isChat = false
        chatPosition = -1
        for (let i = 0; i < msgs.conversations; i++) {
            for (let j = 0; j < msgs.conversations[i].users.length; j++) {
                if (msgs.conversations.users[j].id == id) {
                    isChat = true
                }
            }
            if (isChat) {
                chatPosition = i
            }
        }
        return chatPosition
    },
    findChatById: (id) => {
        for (let i = 0; i < msgs.conversations.length; i++) {  
            if (id == msgs.conversations[i].id) {
                return msgs.conversations[i]
            }
        }
        return -1
    },
    addMessage: (message) => {
        console.log(message.chatId, "id");
        msgs.conversations[message.chatId].chat.push(message)
    },
    userConversation: (id) => {
        isChat = false
        userConversations = []
        for (let i = 0; i < msgs.conversations.length; i++) {
            for (let j = 0; j < msgs.conversations[i].users.length; j++) {
                if (msgs.conversations[i].users[j].id == id) {
                    isChat = true
                }
            }
            if (isChat) {
                userConversations.push(msgs.conversations[i])
                isChat = false
            }
        }
        return userConversations
    }
}


