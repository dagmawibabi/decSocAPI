// Intro
let introduction = async (req, res) => {
    res.send("Dec Soc API Message Route!");
}

// Function to send a message among users
let sendMessage = async (req, res) => {
    res.send("Message Sent!");
}


// Function to get messages between users
let getMessages = async (req, res) => {
    res.send("Message Received!");
}


module.exports = {
    introduction,
    sendMessage,
    getMessages
}