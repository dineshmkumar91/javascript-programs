
function runFunction(){
let arr = [1, 2, 3, 4, 5];
let d = 2;
let res = rotateArr(arr,d);
document.getElementById("output").innerHTML = res;
}

function rotateArr(arr,d) {
   let n = arr.length;
      d %= n;
      let temp = new Array(n);
      for (let i = 0; i < n - d; i++){
            temp[i] = arr[d + i];
      }
      for (let i = 0; i < d; i++){
            temp[n - d + i] = arr[i];
      }
      for (let i = 0; i < n; i++){
            arr[i] = temp[i];
      }
      return arr;

}    
