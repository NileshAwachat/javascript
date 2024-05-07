//Create a function that receives an array of numbers and returns an array containing only the positive numbers. ( Take min 10 elements consisting of at least four negative numbers)

let arr = [1,2,4,-5,6,-7,-8,-9,0]

const newarr = () => {
    let arr1 = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr1.push(arr[i])
        }
    }
    return arr1
}
console.log(newarr())