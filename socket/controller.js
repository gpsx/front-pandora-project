module.exports = {
    addConversation: (users) => {
        msgs.conversations.push({
            id: this.newId(),
            users,
            chat: [] 
        })
    },
    newId:  () => {
        return msgs.conversations.length
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
        isChat = false
        for (let i = 0; i < msgs.conversations; i++) {
            if (id == msgs.conversations[i].id) {
                return msgs.conversations[i]
            }
        }
        return -1
    },
    addMessage: (message) => {
        chatId = this.findByUserChatId(message.userId)
        msgs.conversations[chatId].chat.push()
    },
    userConversation: () => {
        isChat = false
        userConversations = []
        for (let i = 0; i < msgs.conversations; i++) {
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
        return chatPosition
    }
}


