class AccountDao{
  findOrNull(userId){
    return null;
  }
}

class Account {
  constructor(name, password){
    this.name = name;
    this.password = password;
  }
}