(function() {
  'use strict';

  describe('adding a note');
    document.getElementById('note_text').value = 'Hey, we created a note on the front end';
    document.getElementById('create_note').click();
    isEqual('summary of note is displayed after create_note is clicked',
            '<a href="#0">Hey, we created a no...</a>',
            document.getElementsByTagName('li')[0].innerHTML);
  endDescribe();

  describe("viewing a note's full text");
    document.getElementsByTagName('a')[0].click();
    setTimeout(function() {
    isEqual('full note text is displayed after note summary is clicked',
            'Hey, we created a note on the front end',
            document.getElementById('full_note').innerHTML);}, 0);
  endDescribe();

}());
