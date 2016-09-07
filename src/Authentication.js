class Authentication{
  get dao(){
    return this._dao;
  }
  set dao(val){
    this._dao = val;
  }
  authenticate(userId, password){
    var account = this.dao.findOrNull(userId);
    if(account === null) return null;
    return account.password === password ? account : null;
  }
}