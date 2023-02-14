let n=prompt("enter the number of elements :");
let arr=[n];

for(var i=0;i<n;i++)
{
    arr[i]=prompt("Enter the element "+(i+1)+": ");
}
arr.sort();
console.log("The sorted array is")
console.log(arr);
var key=prompt("Enter the element to be searched :");
function binary(arr,key) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
      if (arr[mid] === key) {
    console.log("element found in position in ");
    return mid;
      } else if (arr[mid] < key) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    console.log("element not found");
 
  }
  console.log(binary(arr,key));