/*
 * 整数(count)をN進数に変換し空配列のarrayに各桁をpushします
 */

function n_counter(count, n, array){
    var value = count % n;
    count = Math.floor(count / n);

    array.push(value);
    if(count === 0) return;
    
    n_counter(count, n, array);
}

// for example
// Decimal(22) -> Binary(10110)
// 22 -> [0, 1, 1, 0, 1]
var array = [];
n_counter(22, 2, array); 
console.log(array);

// Decimal(731) -> 7-binary-number(2063)
// 22 -> [3, 6, 0, 2]
n_counter(731, 7, array); 
console.log(array);