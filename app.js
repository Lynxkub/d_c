const testOne = [1,1,1,1,0,0]
const testTwo = [1,0,0,0,0]
const testThree = [0,0,0]
const testFour = [1,1,1,1]
function countZeroes(arr) {
    let leftIdx = 0;
    let rightIdx=arr.length -1;
    while(leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) /2);
     if(arr[midIdx] === 1) {
        leftIdx=midIdx + 1
     }else {
         rightIdx=midIdx -1
     }
    }
    return arr.slice(leftIdx).length;
}
//                  x      x
const sortOne = [1,1,2,2,2,2,3]



function sortedFrequency(arr , num) {
    let leftIdx = 0;
    let rightIdx = arr.length -1;
    while(leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) /2);
        if(arr[midIdx] === num && arr[rightIdx] !== num){
            rightIdx = rightIdx -1;
        } else if (arr[rightIdx] === num && arr[leftIdx] !== num) {
            leftIdx = leftIdx + 1;
        } else if(arr[midIdx] !== num && arr[rightIdx] !== num) {
            rightIdx=midIdx -1
        }else {
            return arr.slice(leftIdx , rightIdx).length + 1
        }
        
        
    }
    return -1
}


const rotateOne = [3,4,1,2]
const rotateTwo = [6,7,8,9,1,2,3,4]

function findRotatedIndex(arr , num) {
    let leftIdx = 0;
    let rightIdx = arr.length -1;
    while(leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if(arr[midIdx] > num && arr[rightIdx] < num) {
            rightIdx = midIdx -1
        }else if (arr[midIdx] > num && arr[rightIdx] > num) {
            leftIdx = midIdx + 1
        } else if (arr[midIdx] === num){
            return midIdx
        }
    }
    return -1
}

const rotateThree = [15,18,2,3,6,12]
const rotateFour = [7,9,11,12,5]

function findRotationCount(arr , leftIdx = 0 , rightIdx = arr.length -1) {
   
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    if(midIdx < rightIdx && arr[midIdx +1] < arr[midIdx]){
        return midIdx + 1
    }
    if(midIdx > leftIdx && arr[midIdx] < arr[midIdx -1]) {
        return midIdx
    }
    if(arr[rightIdx] > arr[midIdx]) {
        return findRotationCount(arr, leftIdx , midIdx -1);
    }
    return findRotationCount(arr , midIdx + 1, rightIdx)
}


const floorOne = [1,2,8,10,12,19]

function findFloor(arr , num) {
    let leftIdx = 0;
    let rightIdx = arr.length -1;
    while(leftIdx <= rightIdx) {
        let midIdx = Math.floor((leftIdx + rightIdx) / 2);
        if(num < arr[leftIdx]) {
            return -1
        }
        else if(arr[midIdx] >= num) {
            rightIdx = midIdx -1
        }else if(arr[midIdx] < num) {
            leftIdx = midIdx + 1
        }else {
            return -1
        }

    }
    return arr[rightIdx]
}