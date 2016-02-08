var assert = require('assert');

describe('dummy tests', function() {
  it('should add a div element to the page', function() {
    var div = document.createElement('div');
    div.id = 'newDiv';
    document.body.appendChild(div);
    assert(document.getElementById(div.id));
  });
})
