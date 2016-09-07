class ItemStock{
  constructor(){
    this.values = {};
  }
  getNum(item){
    let itnm = item && item.name;
    return this.values[itnm] || 0;
  }
  add(item){
    let itnm = item && item.name;
    var num = this.values[itnm] || 0;
    num++;
    this.values[itnm] = num;
  }
}