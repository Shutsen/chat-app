var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
  it('should generate correct message object', () => {
    var from = 'geert@example.com'
    var text = 'Hello you!'
    var message = generateMessage(from, text);
    expect(message.from).toBe('geert@example.com');
    expect(message.text).toBe('Hello you!');
    expect(message.createdAt).toBeA('number');
  });
});