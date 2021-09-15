const express = require('express');
const fs = require('fs');
const path = require('path');
const api = require('./routes/notes')


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and url encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

//link to static assets
app.use(express.static('public'));

// GET route for homepage 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET route for notes page 
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);


//listen port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
