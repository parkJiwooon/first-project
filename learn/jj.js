// 쉬운 문제
//Q1
let num = 1;
while (num < 10) {
    console.log(num);
    num++;
}
//Q2
/*
[연습문제 - 음수 걸러내기]
배열에 음수값이 섞여있습니다.
음수는 제외하고 양수들만 골라내어 합을 구하세요.
*/
let numArr = [10, -10, 20, -30, 40];
let j = 0;
let sum = 0;
while( j < numArr.length) {
    if (numArr[j] > 0) {
        sum = sum + numArr[j]
    }
    j++;
}
console.log(sum);



let sum = 0;
let numArr = [10, -10, 20, -30, 40];
for (let value of numArr) {
    if (value)
} //  Eikfkgkekk

//Q3
let i = 0;
while (i <= 15) {
    if (i % 2 === 0) {
        console.log(i+ " 짝수");
    } else {
        console.log(i+" 홀수");
    }
    i++;
}

for(let i = 0; i <= 15; i++) {
    console.log(`${i} ${i % 2 === 0}`)
}



//1
let n = 10; 

let i = 0;
let result = [0, 1]
while (i < n){
    if (i>=0){
        result.push(i+i);
        i++;
    }
    
}


console.log(`피보나치 수열(${n}항):`, result);

//2
let start = 1, end = 100; // 범위
let i = 1;

while (i>start && i<end) {
    if (i % )
}


console.log(results);

//3
const numbers = [5, 10, 15, 20, 25]; // 배열

let j = 0;
let results = 0;

while(j < numbers.length){
    results += numbers[j]
    j++;
}

console.log(results); // 75
//4
const str = "Hello, World!";

let i = 0;

while(i<=str.length) {
    console.log(str[str.length-i]);
    i++;
}

console.log("뒤집힌 문자열:", reversed);

//5
let n = 5;
let fac = 0;
while (n>=1) {
    
    // 2
//%n !== 0

let start = 1,  end = 100; // 범위
let n = 2;
let results = [];
for (let i = 1; i <= 100; i++) {
  if (n>1 && n<i) {
    i % n !== 0
    results.push(i);
  }
}

console.log(results);