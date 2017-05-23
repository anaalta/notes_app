require('./ButterflyTesting.js');
require('./Note.js');
var Note = require('./Note.js');

var note = new Note('My first note is more than 20 characters');
var note2 = new Note('A short note');

describe('note.text', function() {
    it('stores parameter passed to new Note', function() {
        assert.isEqual(note.text, 'My first note is more than 20 characters');
    });
});

describe('note.summary', function() {
    it('returns first 20 chars of a note', function() {
        assert.isEqual(note.summary(), 'My first note is mor...');
    });
    it('includes no ellipses when note.text is <= 20 characters', function() {
        assert.isEqual(note2.summary(), 'A short note');
    });
});

describe('note.all', function() {
    it('note 2 is in Note.all', function() {
        assert.include(note2, Note.all);
    });
    it('note is in Note.all', function() {
        assert.include(note, Note.all);
    });
});