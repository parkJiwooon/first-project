function ifEven (number) {
  if (number % 2 === 0) {
    console.log("짝수")
  }
  if (number % 2 !== 0) {
    console.log("홀수")
  }

}

ifEven(3);

const isEven = (n1) => n1 % 2 === 0;
console.log(isEven(2));
console.log(isEven(3));