require ('./note_tests.js');
var Note = require('./note.js');

var note = new Note('My first note is more than 20 characters');

isEqual('note.text stores parameter passed to new Note',
         note.text,
        'My first note is more than 20 characters');

isEqual('note.summary returns first 20 chars of a note',
         note.summary(),
        'My first note is mor...');


var note2 = new Note('A short note');
isEqual('note.summary includes no ellipses when note.text is <= 20 characters',
        note2.summary(),
       'A short note');

isEqual('Note.all displays all created notes',
         Note.all,
         [note, note2]);
