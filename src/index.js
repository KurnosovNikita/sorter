class Sorter {
  constructor() {
      this.arr = [];
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
              this.arr.sort();
              /*for(var i=this.arr.length-1;i>0;i--){
                  for(var j=0;j<i;j++){
                     if( this.arr[j] > this.arr[j+1] ){
                         buff = this.arr[j];
                         this.arr[j] = this.arr[j+1];
                         this.arr[j+1] = buff;
                        } 
                  }
              }*/
          } 
      else if(indices.length===2){
          if(this.arr[indices[0]]>this.arr[indices[1]]){
              buff =this.arr[indices[0]];
              this.arr[indices[0]] = this.arr[indices[1]];
              this.arr[indices[1]] = buff;
          }
      }
    // your implementation
  }

  setComparator(compareFunction) {
     this.arr.sort(compareFunction);
    // your implementation
  }
}

module.exports = Sorter;