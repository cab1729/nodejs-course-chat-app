const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {

  var users;

  beforeEach(() => {
    users = new Users();
    users.users = [{
      id: '1',
      name: 'DoctorDisco',
      room: 'TARDIS'
    }, {
      id: '2',
      name: 'Bill',
      room: 'TARDIS'
    }, {
      id: '3',
      name: 'Davros',
      room: 'Skaros'
    }];
  });

  it('Should add new user', () => {
    var users = new Users();
    var user = {
      id: '11235',
      name: 'Fibonacci',
      room: 'Pisa'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('Should return users for TARDIS', () => {
    var userList = users.getUserList('TARDIS');
    expect(userList).toEqual(['DoctorDisco', 'Bill']);
  });
  it('Should return users for Skaros', () => {
    var userList = users.getUserList('Skaros');
    expect(userList).toEqual(['Davros']);
  });

  it('Should remove a user', () => {
    var user = users.removeUser('3');
    expect(users.users.indexOf(user)).toBe(-1);
  });

  it('Should not remove any users', () => {
    users.removeUser('1592');
    expect(users.users.length).toBe(2);

  });

  it('Should return user by id', () => {
    var user = users.getUser('1');
    expect(user.id).toEqual('1');

  });

  it('Should not find a user', () => {
    var user = users.getUser('1592');
    expect(user).toBe(undefined);

  });

});
