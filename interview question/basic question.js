//1 ->  add two Number

// let num1 = 3;
// let num2 = 4;

// let sum = num1 + num2;
// console.log(sum);

// by using function

// function addnumber (num1,num2){
//     return  num1+num2; 
// }
// let result = addnumber(3,2);
// console.log(result)

// by using Arrow Function

// const addnumber = (num1,num2) => num1 + num2;
// let result = addnumber(3,2);
// console.log(result)

// 2 ->reverse string/array/Number

// by inbuilt library

// var a= [1,2,3,4,5]
// a.reverse();
// console.log(a)

// by customReverse

// function Customreverse (originalarray){
//     let leftindex = 0;
//     let rightindex = originalarray.length -1;

//     while (leftindex<rightindex){
//         let temp = originalarray[leftindex];
//         originalarray[leftindex] = originalarray[rightindex];
//         originalarray[rightindex] = temp;
//         leftindex++;
//         rightindex--;

//     }
// }

// let myarray = [1,2,3,4,5];
// customReverse(myarray);
// console.log(myarray)

// by push method

// let number = [1,2,3,4,5]
// let reversenumber =  [];
//     for(let i=number.length; i >=0;i--){
//         reversenumber.push(number[i]);

//     }
//     console.log(reversenumber)

// by hard code

// var t = [];
// var a = [1,2,3,4,5];
// for (var i=0;i<a.length;i++){
//     t[i]=a[a.length-1-i]
// }
// console.log(t)

//remove duplicate characters from sorted array
// var duplicates = function(nums) {
//     let i = 0;
//     for(let j = 0; j<nums.length;j++){
//         if(nums[i]!==nums[j]){
//             i++;
//             nums[i]=nums[j];
//         }
//     }
//     return i+1;
// }

// remove duplicatet character from string
// function removeDuplicates(str) {
//     const set = new Set(str);
//     return [...set].join('');
//   }
  
//   const newStr = removeDuplicates('hello world');
//   console.log(newStr); // "hlwrld"
  

function removeDuplicates (str,n){
    var index = 0;
    for(var i=0; i<n;i++){
        for (var j=0; j<i;j++){
            if(str[i]==str[j]){
                break;
            }
        }
        if(j==i){
            str[index++] = str[i];
        }
    }
    return str.join(" "),slice(str,index);
}

var str = "hello world".split("");
var n = str.length;
console.log(removeDuplicates (str,n));