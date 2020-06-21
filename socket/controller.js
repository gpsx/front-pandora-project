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
let findUser = (id) => {
    for (let i = 0; i < msgs.conversations; i++) {
        console.log(msgs.conversations[i]);
        
        if (id == msgs.conversations[i].id) {
            return i
        }
    }
    return -1
}
let findUserIndex = (id) => {
    index = -1
    for (let i = 0; i < msgs.users.length; i++) {
        if (msgs.users[i].id == id) {
            index = i
        }
    }
    return index
}
let setUserStatus = (id, state) => {
    let index = findUserIndex(id)
    index != -1 ? msgs.users[index].online = state : msgs.users.push({ id, online: state })
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
        user = {}
        for (let i = 0; i < msgs.conversations.length; i++) {
            for (let j = 0; j < msgs.conversations[i].users.length; j++) {
                if (msgs.conversations[i].users[j].id == id) {
                    isChat = true
                }
                currentId = msgs.conversations[i].users[j].id
                console.info(findUserIndex(currentId), "userId");
                findUserIndex(currentId) == -1 ? setUserStatus(currentId, false) : user = msgs.users[findUserIndex(currentId)]
                msgs.conversations[i].users[j].online = user.online
            }
            if (isChat) {
                console.log(msgs.conversations[i].users);
                userConversations.push(msgs.conversations[i])
                isChat = false
            }
        }
        return userConversations
    },
    setUserOnline: (id) =>{
        setUserStatus(id, true)
    },
    setUserOffline: (id) =>{
        setUserStatus(id, false)
    }
}


