const express = require('express');
// const fs = require('fs');
const path = require('path');



const PORT = process.env.port || 3001;

const app = express();

// Middleware for parsing JSON and url encoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

//link to static assets
app.use(express.static('public'));

// GET Route for homepage 
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page 
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// // Wildcard route to direct users to a 404 page (should always be at the end of the GET routes)
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/404.html'))
);


//listen port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
