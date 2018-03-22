class Users {
  constructor () {
    this.users = [];
  };

  addUser (id, name, room) {

    var user = {id, name, room};
    this.users.push(user);
    return user;

  };

  removeUser (id) {
    var user = this.users.filter((user) => user.id === id);
    if (user.length > 0) {
      var remUser =
        this.users.splice(this.users.indexOf(user[0]), 1);
      return remUser;
    }

  };

  getUser (id) {
    return this.users.filter((user) => user.id === id)[0];

  };

  getUserList (room) {

    var users = this.users.filter((user) => user.room === room);
    var namesArray = users.map((user) => user.name);

    return namesArray;

  };

};

module.exports = {Users};
