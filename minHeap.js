class MinHeap {
    constructor(arr) {
        this._data = [null]
        if (arr && arr.length) {
          this._heapSort(arr)
        }
    }
    
    getData() {
        return this._data.slice(1)
    }
    
    _isPresent(el) {
      return (!!el || el === 0)
    } 
    
    clear() {
      this._data = [null]
    }
    
    insert(n) {
      this._data.push(n);
      this._heapifyUp()
    }
    
    _getParentIndex(i) {
      return Math.floor(i / 2);
    }
    _getLeftIndex(i) {
      return i * 2;
    }
    _getRightIndex(i) {
      return (i * 2) + 1;
    }
    
    removeRoot(){
      if (this._data.length <= 2) {
        this._data.length = 1;
      } else {
        this._swap( 1, this._data.length -1);
        this._data.length = this._data.length - 1;
        this._heapifyDown();
      }
    }
    
    _heapifyDown() {
      let parentIndex = 1;
      let leftIndex = this._getLeftIndex(parentIndex);
      let rightIndex = this._getRightIndex(parentIndex);
      
      while( this._isPresent(this._data[leftIndex]) ||
             this._isPresent(this._data[rightIndex]) ) {
        
        let activeChildIndex = null;
        if( this._isPresent(this._data[leftIndex]) && 
            this._isPresent(this._data[rightIndex]) ) {
          
          if (this._data[leftIndex] < this._data[rightIndex]) {
            activeChildIndex = leftIndex;
          } else {
            activeChildIndex = rightIndex;
          }
        } else if( this._isPresent(this._data[leftIndex]) ) {
          activeChildIndex = leftIndex;
        } else {
          activeChildIndex = rightIndex;
        }
        if(this._data[activeChildIndex] < this._data[parentIndex]) {
          this._swap(parentIndex, activeChildIndex);
          parentIndex = activeChildIndex;
          leftIndex = this._getLeftIndex(parentIndex);
          rightIndex = this._getRightIndex(parentIndex);
        } else {
          break;
        }
      }
    }
    
    _heapifyUp() {
      if(this._data.length === 1) {
        return this._data; 
      } else {
        let currIndex = this._data.length - 1;
        let parentIndex = this._getParentIndex(currIndex);
        while( this._isPresent(this._data[parentIndex]) ) {
          if(this._data[currIndex] < this._data[parentIndex]) {
            this._swap(currIndex, parentIndex);
            currIndex = parentIndex;
            parentIndex = this._getParentIndex(currIndex)
          } else {
            break;
          }
        }
      }
    }
    
    _swap(i, j) {
      const temp = this._data[i];
      this._data[i] = this._data[j];
      this._data[j] = temp;
    }
    
    _heapSort(arr) {
      for (let i = 0; i < arr.length; i++) {
        this.insert(arr[i]);
      }
    }
  }
  
  let heap = new MinHeap()
  heap.insert(1);
  heap.insert(3);
  console.log(heap.getData())
  heap.insert(-1);
  heap.insert(9);
  heap.insert(14);
  heap.insert(-1);
  console.log(heap.getData());
  
  heap.clear();
  
  let testArray = [ 1, 4, 5, 775, 23, 63, 23, 5, -32, -232, 9, 20, 11, 0];
  
  // reset!! :)
  heap = null;
  
  // creating a new instance but passing in and array to the constructor
  console.log('************************')
  heap = new MinHeap(testArray);
  console.log(heap.getData());
  
  heap.removeRoot();
  console.log(heap.getData());
  heap.removeRoot();
  console.log(heap.getData());
  heap.removeRoot();
  console.log(heap.getData());
  heap.removeRoot();
  console.log(heap.getData());
  heap.insert(6);
  console.log(heap.getData());
  heap.insert(-6);
  console.log(heap.getData())
  
  