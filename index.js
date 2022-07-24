let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let cors = require('cors');

//! Routes
let userRoute = require('./routes/userRoute');
let messagesRoute = require('./routes/messagesRoute');

//! Middlewear
app.use(bodyParser.json());
app.use(
    cors(
        {
            origin: "*",
            credentials: true
        }
    )
);

//! Config 
let port = process.env.PORT || 3000;
let appName = process.env.APP_NAME || 'DecSoc API';
let apiRoute = process.env.API_ROUTE || '/dsapp';

//! Server 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//! Routes
app.get(`${apiRoute}/`, (req, res) => {
    res.send(`Hello from ${appName}`);
});
app.use(`${apiRoute}/user`, userRoute);
app.use(`${apiRoute}/messages`, messagesRoute);
