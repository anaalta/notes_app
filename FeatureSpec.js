(function() {
  'use strict';
  require ('./ButterflyTesting.js');

  describe('adding a note');
    window.location = 'http://localhost:8080/';
    document.getElementById('note_text').value = 'Hey, we created a note on the front end';
    document.getElementById('create_note').click();
    isEqual('summary of note is displayed after create_note is clicked',
            'Hey, we created a no...',
            document.getElementsByTagName('li')[0].innerHTML);
  endDescribe();

  describe("viewing a note's full text");
    document.getElementsByTagName('li')[0].click();
    isEqual('full note text is displayed after note summary is clicked',
            'Hey, we created a note on the front end',
            document.getElementsByTagName('p')[0].innerHTML);
  endDescribe();


  describe("viewing a note's full text");
    document.getElementById('back-to-all-notes').click();
    isEqual('back-to-notes button returns user to index page',
            'http://localhost:8080/',
            window.location.href);
  endDescribe();

}());
