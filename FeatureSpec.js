(function() {
  'use strict';
  require ('./ButterflyTesting.js');

  describe('action of adding note');
    document.getElementById('note_text').innerHTML = 'Hey, we created a note on the front end';
    document.getElementById('create_note').click();
    include('summary of note is displayed after create_note is clicked',
            'Hey, we created a no...',
            document.getElementsByTagName('li').map(function(element){ return element.innerHTML(); }));
  endDescribe();


  

}());
