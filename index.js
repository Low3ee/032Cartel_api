// Import Express.js
const express = require('express');
// Import body-parser
const bodyParser = require('body-parser');
//Import CORS
const cors = require('cors');

const multer = require('multer');
const upload = multer();

// This variable defines the port of your computer where the API will be available
const PORT = 3000

var corsSettings = {
     origin: "http://localhost:51627",
     methods: "GET,HEAD,PUT,PATCH,POST,DELETE", // Specify the HTTP methods allowed
     credentials: true, // Allow credentials (cookies, authorization headers, etc.)
     optionsSuccessStatus: 204, // Respond with a 204 status for preflight requests
     allowedHeaders: "Origin,X-Requested-With,Content-Type,Accept,Authorization", // Specify the allowed headers
     preflightContinue: false, // Disable preflight requests
     maxAge: 3600, // Set the maximum age (in seconds) for caching preflight requests
   };
// This variable instantiate the Express.js library
const app = express()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//use corsSettings
app.use(cors(corsSettings));

app.use(upload.none())
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