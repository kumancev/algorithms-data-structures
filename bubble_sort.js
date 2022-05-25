const array = [1, 3, 5, 4, 7, 6, 2, 8, 0, -1, 12, 11, -3, 13, 43, 23, 15, 9, 3, 21];
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j + 1] < array[j]) {
                let tmp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = tmp;
            }
            count += 1;
        }
    }
  return array;
}

console.log(bubbleSort(array));
console.log("count = ", count);
