//! Global var
let usersList = [];

// Introduction
let introduction = async (req, res) => {
    res.send('Sign Up Route');
}

// Sign Up
let signup = async (req, res) => {
    let newUser = req.body;
    let exists = false;
    for (let i of usersList){
        if(i['username'] == newUser['username']){
            exists = true;
        }
    }
    console.log(exists);
    if(exists == false){
        usersList.push(newUser);
         res.send(JSON.stringify({"valid": !exists, "data": usersList}));
    } else {
        res.send(JSON.stringify({"valid": !exists, "data": []}));
    }
}

// Login
let login = async (req, res) => {
    let loggingUser = req.body;
    let validUser = false;
    for(let i of usersList){
        if (i['username'] == loggingUser['username']){
            if(i['password'] == loggingUser['password']){
                validUser = true;
            }
        }
    }
    if(validUser == true){
        res.send(JSON.stringify({"valid": validUser, "data": usersList}));
    } else {
        res.send(JSON.stringify({"valid": validUser, "data": []}));
    }
}

module.exports = {
    introduction,
    signup,
    login,
    usersList,
}