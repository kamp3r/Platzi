class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    get(index) {
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
    unshift(index){
      for(let i = this.length; i > index; i++){
        this.data[i] = this.data[i + 1];
      }
      this.length++;
    }
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    delete(index) {
      const item = this.data[index];
      this.shiftIndex(index);
  
      return item;
    }
    shiftIndex(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
    deleteFirst(index){
      const item = this.data[index];
      this.shiftIndex(index);
      return item;
    }
  }
  
  const myArray = new MyArray()

  myArray.push('a')
  myArray.push('b')
  myArray.push('c')

  console.log('myArray', myArray)
  
  myArray.unshift('d')
  console.log('myArray', myArray)