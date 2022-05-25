const array = [1, 3, 5, 4, 7, 6, 2, 8, 0, -1, 12, 11, -3, 13, 43, 23, 15, 9, 3, 21]
let count = 0


function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let indexMin = i
        for (let j = i+1; j < array.length; j++) {
            if (array[j] < array[indexMin]) {
                indexMin = j
            }
            count += 1
        }
        let tmp = array[i]
        array[i] = array[indexMin]
        array[indexMin] = tmp
    }
    return array
}


console.log(selectionSort(array))
console.log("count = ", count)