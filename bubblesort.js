function bubbleSort(arr){

  for (var i = 0; i < arr.length; i++) {
    var num1 = arr[i];
    for (var j = 0; j < arr.length; j++) {
      var num2 = arr[j];
      if (num1 > num2) {
        arr.replace(num1, num2);
      }
    }
  }

  return arr;
}




function bubbleSort(a) {
    var swapped;

    do {
        swapped = false;
        for (var i = 0; i < a.length-1; i++) {
            if (a[i] > a[i+1]) {
                var temp = a[i];
                a[i] = a[i+1];
                a[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
}
