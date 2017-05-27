(function(exports) {
  'use strict';
  
  var Note = function(text){
    this.text = text;
    this.saveNote();
  };

  Note.all = [];

  Note.prototype.summary = function() {
    if (this.text.length <= 20) {
      return this.text;
    } else {
      return this.text.substring(0,20)+'...';
    }
  };

  Note.prototype.saveNote = function(){
    Note.all.push(this);
  };

  exports.Note = Note;
})(this);
