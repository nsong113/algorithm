//코테를 위한 기본 문법

//사칙연산
a = 7;
b = 3;
//몫만 남기기
console.log(parseInt(a / b));
//나머지
console.log(a % b);

//한줄 바꿔 한줄 출력해야 할 때 시간복잡도 줄이는 트릭
let answer = "";
for (let i = 0; i <= 100; i++) {
  answer += i + "\n"; //문자열로 줄바뀌어서 출력됨
}
console.log(answer);

//fs모듈 : 입력데이터가 텍스트 파일 형태로 주어지는 경우, 파일 시스템 모듈을 사용한다.
//예를들어 /dev/stdin파일에 적힌 텍스트를 읽어오는 경우, 다음과 같이 코드를 작성한다.
//기능: 전체 텍스트를 읽어 온 뒤에, 줄바꿈 기호를 기준으로 구분하여 리스트로 변환하기

//readingline모듈보다는 fs를 이용해 파일 전체를 읽어 들여 처리하기
// let fs = require("fs");
// let input = fs.readFileSync("/dev/stdin").toString().split(`\n`);
// // let input = fs.readFileSync("input.txt").toString().split(`\n`);
// console.log(input);

//readline모듈 <-간혹 fs를 사용하지 못 하도록 만들어졌을 수도 있다.
const rl = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input1 = [];
rl.on("line", function (line) {
  //콘솔 입력 창에서 줄바꿈 (enter)를 입력할 때마다 호출
  input.push(line);
}).on("close", function () {
  //콘솔 입력 창에서 ctrl+c 혹은 ctrl+d를 입력하면 호출
  console.log(input);
  process.exit();
});

//조건문
//for 반복문
//while 반복문
//number, string 변환

//reduce : 원소에서 큰값 찾기, 작은값, 합 등등: 배열의 모든 원소에 대해 특정한 연산을 순차적으로 적용할 때 (acc,curr)=> 하나의 반환값
let data = [5, 2, 9, 8, 4];
//min value
let minValue = data.reduce((a, b) => Math.min(a, b)); //2
//원소의 합
let sum = data.reduce((a, b) => a + b); //28

//배열 초기화 방법
let arr = [8, 1, 4, 5, 7];
//길이가 5이고 모든 원소의 값이 0인 배열 초기화
let arrNew = new Array(5).fill(0);
console.log(arrNew);

//집합 자료형: 특정한 원소의 등장 여부를 파악할 때 집합 자료형을 효과적으로 사용할 수 있다.
let mySet = new Set(); //집합 객체 생성
//여러개의 원소 삽입
mySet.add(3);
mySet.add(5);
mySet.add(7);
mySet.add(3);

console.log(`원소의 개수 : ${mySet.size}`);
console.log(`원소 7을 포함하고 있는가? ${mySet.has(7)}`);

//원소 5 제거
mySet.delete(5);
//원소를 하나씩 출력
for (let item of mySet) console.log(item);

//소수점 아래 특정 자리에서 반올림
//실수를 출력할 때 소수점 아래 특정 자리에서 반올림하기
//특정 실수에 대하여 toFixed()를 이용해 소수점 아래 둘째 자리까지 출력
let y = 123.456;
console.log(y.toFixed(2)); //123.46

//이스케이프 시퀀스 escape sequence
//예약 문자 혹은 특수 문자를 출력하기 위하여 이스케이프 시퀀스를 사용할 수 있다.
console.log(`₩₩ 아`);
