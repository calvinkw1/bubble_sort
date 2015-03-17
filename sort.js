function bubbleSort(arr){
  var i,
      count;
  for (count = 0; count < arr.length-1; count++) {
      console.log(count);
      i=0;
    for (i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        var temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        console.log(arr);
      }
    }
  }
  return arr;
}


// do not touch this
module.exports = bubbleSort;

