//Iterating an array
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => {
    console.log(number);
});


//Sorting   
let characters = ['c', 'd', 'b', 'a'];
characters.sort();
console.log(characters);

//Filtering
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

//Mapping
const squaredNumbers = numbers.map(num => num * num);
console.log('squaredNumbers ', squaredNumbers);

const upperCaseCharacters = characters.map(char => char.toUpperCase());
console.log('upperCaseCharacters', upperCaseCharacters);
