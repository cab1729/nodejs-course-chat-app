var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

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

describe('generateLocationMessage', () => {
  it('Should generate current location object', () => {
    var from = 'Admin';
    var latitude = 1;
    var longitude = 1;
    var messageObject = generateLocationMessage(from, latitude, longitude);
    expect(messageObject.from).toBe(from);
    expect(messageObject.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
    expect(typeof messageObject.createdAt).toBe('number');
  });
});
