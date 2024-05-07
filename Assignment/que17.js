//Create a function to reverse a string.
str = "hello"

let reverse = () => {
    let newStr = ""
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]
    }
    return newStr
}
console.log(reverse(str));