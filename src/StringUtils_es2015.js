class StringUtils_es2015{
  static echo(a){
    return a;
  }
  static toSnakeCase(str){
    var snake = str;
    var pattern = /[A-Z]/g;
    var result;
    while((result = pattern.exec(snake)) !== null){
      snake = snake.replace(result[0],"_" + result[0].toLowerCase());
    }
    return snake.replace(/^_/,"");
  }
}