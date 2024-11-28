
function runFunction(){
const arr = [2, 1, 5, 5, 5, 5, 6, 6, 6, 6, 6];
let res = majorityElement(arr);
console.log(res);
document.getElementById("output").innerHTML = res;
}
function majorityElement(arr) {
let res=[];
let check = arr.length/3;
const newArr = {}
arr.forEach(function(val){
    
    if(newArr[val]){
        newArr[val] += 1;
    }else{
        newArr[val] = 1;
    }
})
for(const nums in newArr){
   if(newArr[nums] > check){
     res.push(parseInt(nums));
   }
}
res= res.sort((a,b)=>a-b);
return res;
}    
