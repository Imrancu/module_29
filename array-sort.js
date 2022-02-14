const numbers = [6, 8, 4, 2, 9, 9, 2];
const sortedNumbers = numbers.sort();
// console.log(sortedNumbers);

const friends = ["Lablu", "Rajjak", "Anwar", "Sarwar", "Jamil", "Babul"];
// const reversedFriends = friends.reverse();
// const sortedFriends = friends.sort();
// console.log(reversedFriends);
const sortedReversedFriends = friends.sort().reverse();
console.log(sortedReversedFriends);

const bigNumbers = [45, 32, 87, 84, 57, 90, 68, 43, 80, 5];
const sortedBigNumbers = bigNumbers.sort(function(a, b) {
    return a - b;
});
console.log(sortedBigNumbers);