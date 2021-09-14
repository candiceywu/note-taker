const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');
const fs = require('fs');
const path = require('path');
const database = require('/db/db.js');



// GET Route for reading and retrieving all the saved notes
app.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// GET Route for a specific note being clicked on
app.get('/:notes_id', (req, res) => {




// POST Route for a new note
app.post('/notes', (req, res) => {
  res.
})


// Display notes.html when /notes is accessed
app.get ('/notes', (req, res) => {
res.
})

// Display index.html for all other routes
app.get ('*', (req, res) => {
  res.
})

// Update json file when a note is added (or deleted, extra credit)


module.exports = notes;










