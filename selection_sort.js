module.exports = function SelectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        min_index = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[min_index] > arr[j]) {
                min_index = j;
            }
        }
        var temp = arr[min_index];
        arr[min_index] = arr[i];
        arr[i] = temp
    }
    return arr;
}
// DESCIPTION
// loops for each element
//and in everyElement iteration compares with other elements(with nested loop)
//if bigger than related element changes position