
function moveZeros(){
function pushZerosToEnd(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
               [arr[i], arr[count]] = [arr[count], arr[i]];
              count++;
        }
    }
}

const arr = [1, 2, 0, 4, 3, 0, 5, 0];
pushZerosToEnd(arr);
// console.log(arr.join(" "));
let res = arr.join(" ");
console.log(res);
document.getElementById("output").innerHTML = res;
}
