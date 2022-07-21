let express = require('express');
let app = express();

//! Routes
let messagesRoute = require('./routes/messagesRoute');


//! Config 
let port = process.env.PORT || 3000;
let appName = process.env.APP_NAME || 'DecSoc API';
let apiRoute = process.env.API_ROUTE || '/decSocAPI';

//! Server 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//! Routes
app.get(`${apiRoute}/`, (req, res) => {
    res.send(`Hello from ${appName}`);
});


app.use(`${apiRoute}/messages`, messagesRoute);


