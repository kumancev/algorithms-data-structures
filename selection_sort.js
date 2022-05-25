function selectionSort(Arr) {
let n = Arr.length;
    console.log(n);

    for(let i = 0; i < n; i++) {
        // Находим наименьшее число в правой части массива
        let min = i;
        for(let j = i; j < n; j++) {
            if(Arr[j] < Arr[min]) {
                min=j;
            }
        }
        if (min != i) {
            // Заменяем элементы
            let tmp = Arr[i];
            Arr[i] = Arr[min];
            Arr[min] = tmp;
        }
    }
    return Arr;
}

let inputArr = [5, 2, 4, 6, 1, 3];
selectionSort(inputArr);
console.log(inputArr);