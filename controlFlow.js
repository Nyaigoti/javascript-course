//If Else Statement
let priceOfChocolate = 1.99;
let hasAmountInCash = 5;

const canBuyChocolate = hasAmountInCash >= priceOfChocolate;
if (canBuyChocolate) {
    console.log("You can buy the chocolate.");
}
else {
    console.log("You cannot buy the chocolate.");
}

// Switch Statement
let job = 'software developer';
switch (job) {
    case 'software developer':
        console.log("You are a software developer.");
        break;
    case 'data scientist':
        console.log("You are a data scientist.");
        break;
    case 'product manager':
        console.log("You are a product manager.");
        break;
    default:
        console.log("Job not recognized.");
}

//For Loop
let numbers = [1, 2, 3, 4, 5];

let idx = 0;
let length = numbers.length;

// for (idx = 0; idx < length; idx++){
//     console.log("Number: " + numbers[idx]);
// }

//While Loop
while (idx < length){
    console.log(numbers[idx]);
    idx++
}