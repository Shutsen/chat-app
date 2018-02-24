[{

}]

// addUser(id, name, room)

// removeUser(id)

// getUser(id)

// getUserList(room)

class Users {
  constructor () {
    this.users = [];
  }
  addUser (id, name, room) {
    var user = {id, name, room};
    this.users.push(user);
    return user;
  }
  removeUser (id) {
    var user = this.getUser(id);
    if (user) {
      this.users = this.users.filter((user) => user.id !== id);
    }
    return user;
  }
  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];
  }
  getUserList (room) {
    //the following creates a array of objects cause the users[] that's being filtered is an array of objects.
    var users = this.users.filter((user) => user.room === room);
    //we only need the user.name of each object, so let's convert it:
    var namesArray = users.map((user) => user.name);
    return namesArray;
  }
}

module.exports = {Users};


// class Person {
//   constructor (name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   getUserDescription () {
//     return `${this.name} is ${this.age} year(s) old.`;
//   }
// }

// var me = new Person('Geert', 31);
// var description = me.getUserDescription();
// console.log(description);