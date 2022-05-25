const array = [1, 4, 5, 2, 7, 8, 3, 12, 11]
let count = 0

function linearSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (array[i] === item) {
            return i;
        }
    }
    return null
}

console.log(linearSearch(array, 8));
console.log("count = ", count)