///////////////////////////////////
//iteratively

// let iterativeFunction = function(arr, x){
//   let start = 0; 
//   let end = arr.length;

// while(start<=end){
//   //find mid index

//   let mid=Math.floor((start+end)/2);

//   if(arr[mid]==x){
//       return true;
//   }
//   else if(arr[mid]>x){
//       start = mid -1;
//   }else{
//       end = mid +1;
//   }
// }
// //if not ture...
// return false;
// }


function binarySearch(array, target){
  let startIndex = 0;
  let endIndex= array.length-1;
  while(startIndex <=endIndex){
    let middleIndex=Math.floor((startIndex + endIndex)/2);
    if (target==array[middleIndex]){
      return console.log("Target was found at Index " + middleIndex)
    }
    if (target>array[middleIndex]){
      console.log("searching the right side of the array")
      startIndex= middleIndex +1;
    }
    if(target < array[middleIndex]) {
      console.log("Searching the left side of array")
      endIndex = middleIndex - 1;
    }
    else{
      console.log("not found this loop iterations.Looping another iterations.")
    }
  }
  console.log("target value not found in array")
}
binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200], 87)

// What is the Big O time complexity of binary search?
//  O(log n)

