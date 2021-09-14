const notes = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const {
  readFromFile,
  readAndAppend,
  writeToFile,
} = require('../helpers/fsUtils');
// const fs = require('fs');
const path = require('path');
const database = require('/db/db');

// GET route for retrieving all the notes
notes.get('/', (req, res) => {
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});


// GET Route for a specific tip
notes.get('/:notes_id', (req, res) => {
  const tipId = req.params.notes_id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      const result = json.filter((notes) => notes.notes_id === notesId);
      return result.length > 0
        ? res.json(result)
        : res.json('No note with that ID');
    });
});

// DELETE Route for a specific note
notes.delete('/:notes_id', (req, res) => {
  const notesId = req.params.notes_id;
  readFromFile('./db/db.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
      // Make a new array of all notes except the one with the ID provided in the URL
      const result = json.filter((notes) => notes.notes_id !== notesId);

      // Save that array to the filesystem
      writeToFile('./db/db.json', result);

      // Respond to the DELETE request
      res.json(`Note ${notesId} has been deleted 🗑️`);
    });
});

// POST Route for a new note
notes.post('/', (req, res) => {
  console.log(req.body);

  const { noteTitle, notes } = req.body;

  if (req.body) {
    const newNote = {
      noteTitle,
      notes,
      notes_id: uuidv4(),
    };


    readAndAppend(newNote, './db/db.json');
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding note');
  }
});




// // Display notes.html when /notes is accessed
// app.get('/notes', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/notes.html'));
// })

// // Display index.html for all other routes
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '/public/index.html'));
// })

// Update json file when a note is added 


module.exports = notes;










