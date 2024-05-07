//Calculate the average of the numbers in an array of numbers. (Take a minimum of 8 numbers in the array).
let array=[1,2,3,4,5,6,7,8];
let sum=0;  
let avg=0;
for(let i=0;i<array.length;i++){
    sum+=array[i];
    avg= sum / array.length;
    console.log(avg);
}

 
  


