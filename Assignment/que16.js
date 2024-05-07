//Create a function to reverse an array of numbers.(Take a minimum of 8 numbers in the array).
arr = [1,4,5,7,84,5,9,4]

// arr.reverse();
// console.log(arr);
let reverse = () => {
    let newArr = []
    for (let i = arr.length - 1; i >= 0; i--) {
        newArr.push(arr[i])
    }
    return newArr
}
console.log(reverse(arr));