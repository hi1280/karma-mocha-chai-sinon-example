class MultiLineString{
  static join(){
    var str = "";
    for(var i = 0;i < arguments.length; i++){
      str = str + arguments[i] + "\n";
    }
    return str;
  }
}