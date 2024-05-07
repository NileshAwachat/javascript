//Calculate the sum of odd numbers greater than 10 and less than 30.


// let num = 0;

// for (let i = 11; i<= 29; i++) {
//   if (i% 2 !== 0) {
//     num += i;
//   }
// }
let num = 0 
for (let i = 11; i <= 30; i+=2){
  num += i;
}
console.log(num);