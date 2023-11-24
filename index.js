// Import Express.js
const express = require('express');
// Import body-parser
const bodyParser = require('body-parser');
//Import CORS
const cors = require('cors');
// This variable defines the port of your computer where the API will be available
const PORT = 3000

var corsSettings = {
    origin: "localhost:56197"
}
// This variable instantiate the Express.js library
const app = express()

app.use(express.urlencoded({ extended: true }));

//use corsSettings
app.use(cors());

//use body-parser
app.use(bodyParser.json());

//test route
// app.get('/', (req, res) => {
//     res.json({ message: '032 Cartel Webiste Products API' });
//   });

//import routes
require('./Routes/product.routes.js')(app);


// The code below starts the API with these parameters:
// 1 - The PORT where your API will be available
// 2 - The callback function (function to call) when your API is ready
app.listen(PORT, () =>
  console.log(`This API is running on: http://localhost:${PORT}.`));