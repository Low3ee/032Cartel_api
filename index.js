// Import Express.js
const express = require('express');
// Import body-parser
const bodyParser = require('body-parser');
//Import CORS
const cors = require('cors');


// This variable defines the port of your computer where the API will be available
const PORT = 3000

var corsSettings = {
     origin: "*",
     methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Specify the HTTP methods allowed
     credentials: true, 
     optionsSuccessStatus: 204,
     allowedHeaders: "*", // Specify the allowed headers
     preflightContinue: false, // Disable preflight requests
     maxAge: 3600, // Set the maximum age (in seconds) for caching preflight requests
   };
// This variable instantiate the Express.js library
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//use corsSettings
app.use(cors(corsSettings));

//test route
// app.get('/', (req, res) => {
//     res.json({ message: '032 Cartel Webiste Products API' });
//   });

//import routes
require('./Routes/product.routes.js')(app);
require('./Routes/user.routes.js')(app);
require('./Routes/cart.routes.js')(app);

app.listen(PORT, () =>
  console.log(`This API is running on: http://localhost:${PORT}.`));