
function runFunction(){
const arr = [12, 13, 1, 10, 34, 1];
let res = threeDistinctElements(arr);
console.log(res);
document.getElementById("output").innerHTML = res;
}
function threeDistinctElements(arr) {
    let first,second,third;
    if(arr.length < 3){
        return 'Invalid Input';
    }
    third = first = second = Number.MIN_VALUE;
    for (let i=0; i < arr.length; i++){
        if(arr[i] > first){
            third = second;
            second = first;
            first = arr[i];
        }else if (arr[i] > second){
            third = second;
            second = arr[i];
        }else if(arr[i] > third){
            third = arr[i];
        }
        }
    return [first,second,third];

    }    
