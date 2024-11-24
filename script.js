
function myFunction() {
// maximum([1,2,4,7,3]);
// secondMaximum([1,2,4,33,9,7,3]);
// checkPalindrome("dinesh");
// returnEven([1,2,4,33,9,7,8,6,6.4,3]);
  // let fact = factorial(5);
  // console.log(fact);
  // copyWithint();
  // findMethod();
  // findAllOcc();
  // variables();
  // typeConversion();
  // moveZeros();
  getMinMax();

}

//#1.find maximum in array;
function maximum(arr){
   let max = Math.max(...arr);
   console.log(max);
   let sort = arr.sort();
   console.log(sort.at(-1));
 
}

//#2. find second maximum in array
function secondMaximum(arr){
   let sort = arr.sort((a,b)=>a>b);
   console.log(sort);
   console.log(sort.at(-2));
 
}

//#3.check palindrome
function checkPalindrome(text){
 let revText = text.split("").reverse().join("");
 text==revText?console.log('yes'):console.log('no');

}

//#4.return even numbers
function returnEven(arr){
  let even = arr.filter(num=>num%2===0);
  console.log(even);
}

//#5.factorial
function factorial(n){
   if (n === 0) { 
    // console.log(1);
        return 1; 
    } 
    else { 
      console.log( n * factorial( n - 1 ));
        return n * factorial( n - 1 ); 
    } 
 
}
//#5.copywithin
function copyWithint(){
// const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
// fruits.copyWithin(2, 0, 2); 
// console.log(fruits.copyWithin(2, 0, 2)); 
const myArr = [[1,2],[3,4],[5,6,[7,8,[9,10]]]];

const newArr = myArr.flat();
console.log(newArr);



}

//#6 find
function findMethod(){
  const numbers = [4, 9, 16, 25, 29];
let first = numbers.find((ele)=>{return ele > 18;});
console.log(first);
}

//#7 occerence of all elements

function findAllOcc(){

let arr = [4,5,6,7,8,4,5,3,4];
newArr = [];
arr.map((ele,index)=>{if(ele == 4){newArr.push(index+1)}});
console.log(newArr);
}

let test_let = 20;
var test_var = 39;
const test_const = 45;
function variables(){
  let number = 50

function print() {
  let square = number * number

  if (number < 60) {
    console.log(largerNumber);
     // console.log(anotherLargerNumber);
      // console.log(newNumber);
    var largerNumber = 80
    let anotherLargerNumber = 100
    const newNumber = 130;
    // const newNumber = 132;
    // console.log(square)
    //  console.log(anotherLargerNumber);
  }

  console.log(largerNumber)
  // console.log(anotherLargerNumber)
  // console.log(newNumber);
}
// console.log(largerNumber);
console.log(test_let);
console.log(test_var);
console.log(test_const);
print();
}

function typeConversion(){
  let y = "5";
let x = y++;

console.log(typeof(y));
console.log(x);
console.log(typeof(x));
console.log(x);
}

function moveZeros(){
// let arr = [3,5,0,0,4];
// JavaScript Program to move all zeros to end using one traversal

// Function which pushes all zeros to end of array
function pushZerosToEnd(arr) {
    
    // Pointer to track the position for next non-zero element
    let count = 0;
    
    for (let i = 0; i < arr.length; i++) {
        
        // If the current element is non-zero
        if (arr[i] !== 0) {
            
            // Swap the current element with the 0 at index 'count'
            // let temp = arr[i];
            // arr[i] = arr[count];
            // arr[count] = temp;
            // [arr[i], arr[count]] = [arr[count], arr[i]];
               [arr[i], arr[count]] = [arr[count], arr[i]];
            
            // Move 'count' pointer to the next position
            count++;
        }
    }
}

const arr = [1, 2, 0, 4, 3, 0, 5, 0];
pushZerosToEnd(arr);
console.log(arr.join(" "));
}

function getMinMax() {
        // code here
  let arr = [3, 2, 1, 56, 10000, 167];
        let mini = Infinity;
        let maxi = -Infinity;
        for(let i=0;i<arr.length;i++){
            if(arr[i] < mini){
                mini = arr[i];
            }
            
            if(arr[i] > maxi){
                maxi=arr[i]
            }
        }
        console.log(mini);
        console.log(maxi);
        // return mini;
    }

function largestThreeDistinct(){
  let arr = [10, 4, 3, 50, 23, 90];
  arr.sort((a,b)=>a-b);
  let first,second,third;
  first = arr.at(-1);
  for(let i=arr.length-1;i>=0;i--){
   
   if(arr[i]!==first){
    second = a[i];
    break;
   }
   

  }
}


