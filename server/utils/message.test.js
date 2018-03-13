var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {

  it('Should generate a message object', () => {
    var from = 'Doctor';
    var text = 'Basically... run';
    var messageObject = generateMessage(from, text);
    expect(messageObject.from).toBe(from);
    expect(messageObject.text).toBe(text);
    expect(typeof messageObject.createdAt).toBe('number');
  });

});
