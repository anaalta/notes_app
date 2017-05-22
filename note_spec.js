require ('./note_tests.js');
var Note = require('./note.js');

var note = new Note('My first note is more than 20 characters');
isEqual('note text is parameter passed to new Note',
         note.text,
        'My first note is more than 20 characters');

isEqual ('note text is parameter passed to new Note',
         note.text,
         'My second note');

isEqual('first 20 chars of a note are displayed',
         note.summary(),
        'My first note is mor...');

var note2 = new Note('A short note');
isEqual('no ellipses displayed in summary when it is <= 20 characters',
        note2.summary(),
       'A short note');


isEqual('displays two notes',
         Note.all,
         [note, note2]);

         console.log(Note.all);
         console.log([note, note2]);
         console.log([note, note2]=== Note.all);
