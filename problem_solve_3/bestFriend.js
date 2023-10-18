function bestFriend(array) {
    const height_length = 10;
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > height_length) {
            return array[i];
        }
    }
}
const arr = ['atik', 'showrab', 'nobel', 'mirza azam nohi', 'nabil'];
const result = bestFriend(arr);
console.log(result,'is your bestfriend:');