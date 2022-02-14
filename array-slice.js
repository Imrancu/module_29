const numbers = [2, 43, 56, 786, 864, 43, 45, 43, 64, 78, 90, 34];
// const numbersSliced = numbers.slice(2, 5);
// console.log(numbersSliced);
// console.log(numbers)
// const numbersSpliced = numbers.splice(2, 2);
// console.log(numbersSpliced);
// console.log(numbers);

const numbersSliced2 = numbers.splice(2, 2, 99, 110, 322, 455, 32);
console.log(numbersSliced2);
console.log(numbers);