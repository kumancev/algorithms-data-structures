function binary_search(list, item) {
    let low = 0
    let high = list.length - 1

    while (low <= high) {
        let mid = Math.round((low + high) / 2)    // получаем число в середине
        let guess = list[mid]                    // число которое сравниваем с искомым == mid
        if (guess === item) return mid            // если совпало с искомым возвращаем
        else if (guess > item) {
            high = mid - 1         // если искомое число меньше => то длину массива с конца делаем mid - 1
        }
        else {
            low = mid + 1         // еTсли искомое число больше => то длину массива с начала делаем mid + 1
        }          
    }
    return -1
    
}

const my_list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(binary_search(my_list, 9))
