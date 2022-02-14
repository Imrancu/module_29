function megaFriends(friends) {
    if (Array.isArray() == false) { // Array.isArray() to check array
        return 'Please, Provide an array....'
    }
    let mega = friends[0];
    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend
        }
    }
    return mega;
}
const friends = ["sabbir", "akkas", "rakib", "Jibon"]
const myBigBuddy = megaFriends(friends);
// console.log(myBigBuddy);

if (friends.indexOf('akkas') != -1) {
    // console.log("akkas exists");
}
if (friends.includes('akkas')) {
    console.log('akkas exists using includes');
}

// concate
const first = [1, 2, 3, 4];
const second = [43, 67, 86, 85];
const concateTwoArray = first.concat(second);
console.log(concateTwoArray);