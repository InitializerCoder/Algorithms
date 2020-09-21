module.exports = function QuickSort(array) {
    if (array.length == 1) {
        return array;
    }
    const pivot = array[array.length - 1];
    const leftArray = [];
    const rightArray = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            leftArray.push(array[i]);
        } else {
            rightArray.push(array[i]);
        }
    }
    if (leftArray.length > 0 && rightArray.length > 0) {
        return [...QuickSort(leftArray), pivot, ...QuickSort(rightArray)];
    } else if (leftArray.length > 0) {
        return [...QuickSort(leftArray), pivot]
    } else {//rightArr length greater than zero
        return [pivot, ...QuickSort(rightArray)]
    }
}