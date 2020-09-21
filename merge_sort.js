module.exports =  function mergeSortTopDown(arr) {
    if (arr.length <= 1) {
        return arr
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle)
    
    return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right));
}
function mergeTopDown(left, right) {
    const array = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            array.push(left.shift());
            // array.push(left[0]);
            // left.splice(0,1);
        } else {
            array.push(right.shift())
        }
    }
    return array.concat(left.slice()).concat(right.slice());
}