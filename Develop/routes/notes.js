const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');
const fs = require('fs');
const path = require('path');
const database = require('/db/db');


// GET Route for notes page via url
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET Route for reading and retrieving all the saved notes
app.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// GET Route for a specific note being clicked on
app.get('/:notes_id', (req, res) => {


// GET for adding to the notes list
app.get('/notes', (req, res) => {
  res.json(database);
});

// POST Route for a new note
app.post('/notes', (req, res) => {
  
})



// write to JSON file
//fs.writeToFile()


// Display notes.html when /notes is accessed
app.get ('/notes', (req, res) => {
res.sendFile(path.join(__dirname, '/public/notes.html'));
})

// Display index.html for all other routes
app.get ('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
})

// Update json file when a note is added (or deleted, extra credit)


module.exports = notes;










