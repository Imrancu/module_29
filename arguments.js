function addNumbers(num1, num2) {
    // console.log(arguments);
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    // const result = num1 + num2;
    return result;
}

const sum = addNumbers(5, 10, 4, 6, 8)
    // console.log(sum);


function getFullName(fName, lName) {
    let fullName = '';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Mohammad', 'Imran', 'is', 'student');
console.log(name);