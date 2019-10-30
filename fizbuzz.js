//# Write a function that takes an array of numbers as a parameter. Find the maximum number, the minimum number, and the average of all the numbers in the array. Return these values in a nicely formatted string.
//Example: maxMinAvg([1, -2, 9, 4]) returns "The minimum is -2, the maximum is 9, and the average is 3."
x=[1,-2,9,4];
var max = x[0];
var min = x[0];
var sum = 0;
sum = sum+x[0];
for (var i=1; i<x.length;i++)
{
	if (x[i]>max)
	{
		max = x[i];
	}
	if (x[i]<min)
	{
		min = x[i];
	}
	sum = sum + x[i];
}
console.log('Max is ',max);
console.log('Min is ',min);
console.log('Avg is ',sum/x.length);



////SOlution 2
function maxMinAvg(arr) {
    max = arr[0];
    min = arr[0];
    var total = 0;
    
         
          for (i = 0; i < arr.length; ++i) {
               total += arr[i]; // add each element in an array to total
       }
          average = total / arr.length;
          
          for(var i=0;i<arr.length;i++){
          if (max < arr[i]){
               max = arr[i] ;
          }
      }
      
      
          for(var j=0;j<arr.length;j++){
          if (min > arr[j]){
              min = arr[j];
          }
      }
    arrnew = (max+","+ min+","+ average)
      
      return arrnew; 
  }
  console.log(maxMinAvg([0,2,4])); //4,0,2
  console.log(maxMinAvg([1,5,10,-2])); //10,-2,3.5
  console.log(maxMinAvg([0]));//0,0,0,
  
    maxMinAvg([1,-2,9,4])
  

    /////Fizbuzz

    function FizzBuzz(num){
        for(var i=1; i<=15; i++) {
            if(i % 3 === 0 && i % 5 === 0) {
              console.log("FizzBuzz");
          } else if(i % 3 === 0) {
              console.log('Fizz');
          } else if (i % 5 === 0) {
              console.log('Buzz');
          } else {
              console.log(i);
          }
        }
      
      }
      FizzBuzz(15)
      