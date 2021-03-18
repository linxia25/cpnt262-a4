// Load dependencies
const path = require('path');
const dotenv = require('dotenv').config()
const express = require('express');
const cors = require('cors');

//Load route as a separate module
const api = require('./routes/api/v0');

//Require index module
const index = require('./routes/index');

// Create express app
const app = express();

//Allow cross http
app.use(cors());

app.use('/api/v0', api);


// Create view engine
app.set('view engine', 'ejs');

// Set all files in the public folder as static files
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',index)

app.use(function(req, res) {
  res.status(404);
  res.send('404: File Not Found');
});

// Set port preferrence with default
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});