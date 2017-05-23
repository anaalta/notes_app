require ('./ButterflyTesting.js');
var Note = require('./Note.js');

var note = new Note('My first note is more than 20 characters');

describe('note.text');
isEqual('stores parameter passed to new Note',
         note.text,
        'My first note is more than 20 characters');
endDescribe();

describe('note.summary');
isEqual('returns first 20 chars of a note',
         note.summary(),
        'My first note is mor...');

var note2 = new Note('A short note');
isEqual('includes no ellipses when note.text is <= 20 characters',
        note2.summary(),
       'A short note');
endDescribe();

describe('Note.all');
include('note 2 is in Note.all', note2, Note.all);
include('note is in Note.all', note, Note.all);
endDescribe();