//Create a function that will merge two arrays and return the result as a new array
arr1 = [1,2,3,4,5]
arr2 = [6,7,8,9,10]

// arr3 = arr1.concat(arr2)
// console.log(arr3);

let merge = () => {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        newArr.push(arr1[i])
    }
    for (let i = 0; i < arr2.length; i++) {
        newArr.push(arr2[i])
    }
    return newArr
}
console.log(merge(arr1, arr2));