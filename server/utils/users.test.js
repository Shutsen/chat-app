const expect = require('expect');
const {Users} = require('./users');

describe('Users', () => {
  var users;
  
  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'Mike',
      room: 'Node.js'
    },{
      id: '2',
      name: 'Geert',
      room: 'Vue.js'
    },{
      id: '3',
      name: 'Elise',
      room: 'Node.js'
    },{
      id: '4',
      name: 'Wim',
      room: 'Node.js'
    }]
  })

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: 123,
      name: 'Geert',
      room: 'The Office Fans'
    }
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var user = users.removeUser('1');
    expect(users.users.length).toBe(3);
    expect(user).toEqual({id: '1', name: 'Mike', room: 'Node.js'});
  });

  it('should not remove user', () => {
    var user = users.removeUser('9');
    expect(users.users.length).toBe(4);
    expect(user).toNotExist();
  });

  it('should find user', () => {
    var user = users.getUser('2');
    expect(user).toEqual({id: '2', name: 'Geert', room: 'Vue.js'});
  });

  it('should not find user', () => {
    var user = users.getUser('9');
    expect(user).toNotExist();
  });

  it('should return names for Node.js room', () => {
    var userList = users.getUserList('Node.js');
    expect(userList).toEqual(['Mike', 'Elise', 'Wim']);
  });

  it('should return names for Vue.js room', () => {
    var userList = users.getUserList('Vue.js');
    expect(userList).toEqual(['Geert']);
  });
});