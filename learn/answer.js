//1
// 매개변수를 전달받아서 매개변수의 총 합을 반환하는 덧셈 함수를 만들어주세요.
// 매개변수의 갯수 제한은 없습니다.
function sum() {
  let sum = 0;
  for (let value of arguments) {
    sum += value;
  }
  return sum;
}

console.log(sum(1, 5, 6, 3, 4, 6, 6));

//2
//사칙연산을 수행하는 로직을 담은 함수를 구현해주세요.  (매개변수 - 2개) (+, -, *, /)
//구현 방법은 자율입니다.

function calculate(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
  console.log(`${n1} - ${n2} = ${n1 - n2}`);
  console.log(`${n1} * ${n2} = ${n1 * n2}`);
  console.log(`${n1} / ${n2} = ${n1 / n2}`);
}

calculate(8, 10);

//3
//숫자를 매개변수로 받아서 짝수면 true, 홀수면 false를 반환하는 함수 isEven을 작성하세요.
//함수를 사용하여 7이 짝수인지 홀수인지 판별하고 결과를 출력하세요.
function isEven(i) {
  if (i % 2 === 0) {
    console.log("true");
  } else {
    console.log("false");
  }
}

isEven(7);


//6

let results = "";
function reverseString(str) {
  for (let i=str.length-1; i>=0; i--){
    results += str[i];
  }
  return results;
}
console.log(reverseString("hello"));
