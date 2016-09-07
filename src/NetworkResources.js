class NetworkResources{
  constructor(loader){
    this.loader = loader;
  }
  load(){
    var reader = this.loader.getInput();
    var str = reader.read();
    return str;
  }
}

class NetworkLoader{
  getInput(){
    return null;
  }
}