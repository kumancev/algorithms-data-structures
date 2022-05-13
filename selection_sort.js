function selectionSort(Arr) {
  let n = Arr.length;

  for (let i = 0; i < n; i++) {
    // Находим наименьшее число в правой части массива
    let min = i;
    for (let j = i; j < n; j++) {
      if (Arr[j] < Arr[min]) {
        min = j;
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

// another way
function sort2(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let mitIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[mitIndex]) {
        mitIndex = j;
      }
    }

    let tmp = arr[mitIndex];
    arr[mitIndex] = arr[i];
    arr[i] = tmp;
  }
  return arr;
}

let inputArr = [5, 2, 4, 6, 1, 3];
console.log(selectionSort(inputArr));
console.log(sort2(inputArr));
