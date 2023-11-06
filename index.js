console.log("Binary search problems");

//Start from FOR LOOP IN LINE 40;
/**Input: nums = [1,2,5,2,3], target = 2
Output: [1,2]
Explanation: After sorting, nums is [1,2,2,3,5].
The indices where nums[i] == 2 are 1 and 2.**/

const nums = [1, 2, 5, 2, 3];
const target = 2;

const sortedArray = nums.sort();
//console.log(sortedArray);

function findTargetNum(arr, target) {
  const sortedArray = arr.sort();
  const middleOfTheArray = Math.round(sortedArray.length / 2);
  if (sortedArray[middleOfTheArray] === target) {
    return target;
  } else if (target < sortedArray[middleOfTheArray]) {
    //finding index of target
    let targetIndex = arr.indexOf(target);
    console.log(targetIndex);
    //let end=
  } else if (target > sortedArray[middleOfTheArray]) {
    let indexOfTarget = arr.indexOf(target);
    let start = sortedArray[middleOfTheArray];
    start = indexOfTarget;

    //length-1 property doesn't give value of the element , only gives index of the last-element;

    let end = sortedArray.length - 1;

    //to start the loop the start should always be less than to the end of the array, it can't be greater than the end
    //start = index of the middle element of the array
    //end = index of the last element of the array
    //end = sortedArray.length - 1;
    //console.log(`${sortedArray[indexOfTarget]}`);

    //For Loop
    for (start <= end; start++; ) {}
    console.log(`${sortedArray} start:${start} end of the array:${end}`);
  } else {
    console.log(
      `Target is not at the middle of the array ${sortedArray[middleOfTheArray]} ${sortedArray}`
    );
  }
}
findTargetNum(nums, 5);
console.log(findTargetNum(nums, 5));
