class Sorter {
  constructor() {
      this.arr = [];
      this.setC;
    // your implementation
  }

  add(element) {
      this.arr.push(element);
    // your implementation
  }

  at(index) {
      return this.arr[index];
    // your implementation
  }

  get length() {
      return this.arr.length;
    // your implementation
  }

  toArray() {
      return this.arr;
    // your implementation
  }

  sort(indices) {
      
     indices.sort();
      var buff = 0,g=0;
      if(this.arr.length===indices.length)
          {
              this.arr.sort(this.setC);
          } 
      else if(indices.length===2){
          if(this.setC === undefined){
             if(this.arr[indices[0]]>this.arr[indices[1]]){
             var buff = [];
              buff.push(this.arr[indices[0]],this.arr[indices[1]]);
                buff.sort(this.setC);
              this.arr[indices[0]] = buff[0];
              this.arr[indices[1]] = buff[1];
             } 
          }else{
              var buff = [];
              buff.push(this.arr[indices[0]],this.arr[indices[1]]);
                buff.sort(this.setC);
              this.arr[indices[0]] = buff[0];
              this.arr[indices[1]] = buff[1];
          }
           
      }
    // your implementation
  }

  setComparator(compareFunction) {
      this.setC = compareFunction;
    // your implementation
  }
}

module.exports = Sorter;