const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');
const fs = require('fs');
const path = require('path');



// GET Route for reading and retrieving all the saved notes
notes.get('/notes', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// GET Route for a specific note being clicked on
notes.get('/:notes_id', (req, res) => {


// DELETE Route for a specific note (extra credit)


// POST Route for a new note
notes.post('/notes', (req, res) => {
  res.
})


// Display notes.html when /notes is accessed
notes.get ('/notes', (req, res) => {
res.
})

// Display index.html for all other routes
notes.get ('*', (req, res) => {
  res.
})

// Update json file when a note is added (or deleted, extra credit)


module.exports = notes;










