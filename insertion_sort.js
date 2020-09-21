var arr = [1, 9, 3, 0, -5, 5, 2];
module.exports =function InsertionSort(arr) {
    //start loop from beginning
    for (let i = 0; i < arr.length; i++) {
        //at each iteration imagine we merging into 2 arrays
        //at each iteration we grab one element
        var key = arr[i];
        var j = i - 1;
        while (j >= 0 && arr[j] > key) {
            //we changing that element position until bigger than previous element
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key
    };
    return arr;
}