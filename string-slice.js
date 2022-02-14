const anthem = "amar sonar bangla ami tomai valobashi";
// split()
const words = anthem.split(' ');
const withoutA = anthem.split('a', 2);
// console.log(withoutA);

// slice()
const smallSlice = anthem.slice(5, 13);
// console.log(smallSlice);

// substr()
const anotherPart = anthem.substr(11, 6);
// console.log(anotherPart);

// substring()
const anotherPartString = anthem.substring(3, 6)
    // console.log(anotherPartString);

// concat
const first = 'amader';
const second = 'city';
// const fullString = first + second;
const fullString = first.concat(second).concat("Imran")
    // console.log(fullString);

// join()
const joinLetter = ['b', 'a', 'n', 'g', 'l', 'a'];
const wordMaking = joinLetter.join('');
const wordMaking = joinLetter.join(',');
const wordMaking = joinLetter.join(' ');
const wordMaking = joinLetter.join(', ');
console.log(wordMaking);