//Find the maximum number in an array of numbers (Take a minimum of 8 numbers in the array).

arr = [1,2,3,9,11,56,7]

const max = () => {
    let max = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max
}
console.log(max());