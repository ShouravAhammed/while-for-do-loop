// reverse array for loop
// const names = ["r", "i", "d", "o", "y"];
// for (let i = arr.length -1; i >= 0; i--){
//     console.log(names[i]);
// }


// sum of array element
// let num = [10, 20, 30, 40, 50];
// let sum = 0;
// for(let i = 0; i < num.length; i++){
//     const currentNumber = num[i];
//     sum = sum + num[i];
// }
// console.log(sum);


// swap array element
// const num = [10, 20, 30, 40, 50];

// let temp = num[4];

// num[4] = num[1];
// num[1] = temp;
// console.log(num);


//  find array element 

// const names = ["r", "i", "d", "o", "y"];
// let target = "y";
// let foundIndex = -1;

// for (let i = 0; i < names.length; i++){
//     const currentNumber = names[i];

//     if (currentNumber == target){
//         foundIndex = i;
//     }
// }
// if(foundIndex > -1){
//     console.log(foundIndex, "founded");
// }
// else{
//     console.log("not found");
// }

// find min max array

const num = [80, 20, 30, 40, 10];

let maxNum = num[0];
let minNum = num[0];

for (let i = 0; i < num.length; i++){
    const currentNumber = num[i];
    console.log(num[i]);
    if (maxNum < currentNumber){
        maxNum = currentNumber;
    }
}

