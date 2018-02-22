var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'geert@example.com';
    var text = 'Hello you!';
    var message = generateMessage(from, text);
    expect(message.from).toBe('geert@example.com');
    expect(message.text).toBe('Hello you!');
    expect(message.createdAt).toBeA('number');
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Admin';
    var lat = 11;
    var lon = 21;
    var url = `https://www.google.com/maps?q=${lat},${lon}`;
    var location = generateLocationMessage(from, lat, lon);
    expect(location.createdAt).toBeA('number');
    expect(location).toInclude({from, url});
  });
});