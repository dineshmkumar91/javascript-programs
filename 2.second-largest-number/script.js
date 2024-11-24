
function runFunction(){
const arr = [1, 2, 0, 4, 3, 0, 5, 0];
let res = findsecondLargest(arr);
console.log(res);
document.getElementById("output").innerHTML = res;
}
function findsecondLargest(arr) {
        let l=arr.length;
        arr.sort((a,b)=>a-b);
        for(let i=l-2;i>=0; i--){
            if(arr[i]!== arr[l-1] ){
                return arr[i];
            }
        }
    return -1;
}
