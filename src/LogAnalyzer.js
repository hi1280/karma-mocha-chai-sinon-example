class LogAnalyzer{
  constructor(logLoader){
    this.logLoader = logLoader;
  }
  analyze(file){
    try{
      var rawData = this.logLoader.load(file);
      return this.doAnalyze(rawData);
    }catch(e){
      throw new Error(e);
    }
  }
  doAnalyze(rawData){
    return {};
  }
}

class LogLoader{
  load(fileName){
    return {};
  }
}