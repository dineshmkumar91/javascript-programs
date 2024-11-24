
function runFunction(){
const arr = [8,8,2,2];
let res = threeDistinctElements(arr);
console.log(res);
document.getElementById("output").innerHTML = res;
}
function threeDistinctElements(arr) {
    let first,second,third;
     if(arr.length <= 3){
        let sorted = arr.sort((a,b)=>b-a);
        let newArr = [];
        sorted.forEach(function(val){
            if(!newArr.includes(val)){
                newArr.push(val)
            }
        })
     return newArr;
    }
    third = 0; first = 0; second =0;
    for (let i=0; i < arr.length; i++){
        if(arr[i] > first){
            third = second;
            second = first;
            first = arr[i];
        }else if (arr[i] > second && arr[i] < first){
            third = second;
            second = arr[i];
        }else if(arr[i] > third && arr[i] < second){
            third = arr[i];
        }
        }
    let res = [];
    if(first){res.push(first)}
    if(second){res.push(second)}
    if(third){res.push(third)}
    return res;

    }    
