(function(exports) {
  'use strict';
  exports.createNote = function() {
    var noteText = document.getElementById("note_text").value;
    var note = new Note(noteText);
    clearTextBox();
  };

  exports.displayAll = function() {
    clearDisplay();
    populateNoteList();
  };

  function clearTextBox() {
    document.getElementById('note_text').value = '';
  }
    
  function clearDisplay() {
    if (document.getElementById('list')) {
      document.getElementById('list').outerHTML = "";
    }
  }

  function populateNoteList() {
    document.body.insertAdjacentHTML('beforeend', "<ol id = 'list' ></ol>");
    for (var i = 0; i < Note.all.length; i++) {
      document.getElementById('list').insertAdjacentHTML('afterbegin',
                                                         '<li><a href=#' + i + '>' + Note.all[i].summary() + '</a></li>');
    }
  }

  (function displaySelectedNote() {
    window.addEventListener("hashchange", showNoteForCurrentLink);
  })();

  function showNoteForCurrentLink() {
    showNote(getUrl(window.location));
  }

  function getUrl(location) {
    return location.hash.split('#')[1];
  }

  function showNote(note) {
    if (Note.all.length > 0) {
      document
        .getElementById('full_note')
        .innerHTML = Note.all[note].text;
    }
  }

})(this);
