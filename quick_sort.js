const array = [1, 3, 5, 4, 7, 6, 2, 8, 0, -1, 12, 11, -3, 13, 43, 23, 15, 9, 3, 21, -3, 13, 63, 13, 10, 7, -3, 21]
let count = 0

function quickSort(array) {
    if (array <= 1) {
        return array
    }
    let pivotIndex = Math.floor(array.length / 2);
    let pivot = array[pivotIndex]
    let less = []
    let greater = []
    // В цикле сравниваем каждый элемент с опорным
    for (let i = 0; i < array.length; i++) {
        count += 1
        if (i === pivotIndex)
            continue
        if (array[i] < pivot) {
            less.push(array[i])
        } else {
            greater.push(array[i])
        }

    }
    return [...quickSort(less), pivot, ...quickSort(greater)]
}


console.log(quickSort(array))
console.log("count = ", count)