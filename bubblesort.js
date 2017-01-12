//In Class Solution
// function bubbleSort(arr){
// 	// debugger;
//   for (var i = 0; i < arr.length; i++) {
//   	var stop = arr.length - i;
//     for (var j = 0; j < stop; j++) {
// 		var num1 = arr[j]
//       	var num2 = arr[j + 1];
//       	if (compare(num1, num2)) {
//         	swap(arr, j);
//       }
//     }
//   }
//   console.log(arr);
//   return arr;
// }


function compare(num1, num2){
	return num1 > num2;
};

function swap(arr, index){
	var temp = arr[index];
	arr[index] = arr[index + 1];
	arr[index + 1] = temp;
};


//App Academy Solution
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
    return a;
}
