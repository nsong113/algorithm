//1. 짝수와 홀수
//정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.
// function solution(num) {
//   if (num % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
//   return answer;
// }
// console.log(solution(3));

// function solution(num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// }
// console.log(solution(3));

//2. 평균구하기
//정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.
// function solution(arr) {
//   var answer = 0;
//   for (let i = 0; i < arr.length; i++) {
//     answer += arr[i];
//   }
//   return answer / arr.length;
// }
// console.log(solution([1, 2, 3, 4]));

// arr = [1, 2, 3, 4];
// const add = (acc, value) => acc + value;
// const answer = arr.reduce(add, 0) / arr.length;
// console.log(answer);

//3.자릿수 더하기  -> 조금 어려움...
//자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
//예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
// function solution(n) {
//   var result = 0;
//   var answer = n.toString().split("").map(Number);
//   for (let i = 0; i < answer.length; i++) {
//     result += answer[i];
//   }
//   return result;
// }
// console.log(solution(123));

// n = 123;
// const nArr = [...n.toString()];
// const add = (acc, curr) => acc + curr;
// const answer = nArr.map(Number).reduce(add, 0);
// console.log(answer);

//4.약수의 합
//정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
//trouble shooting: i % n을 했더니 0,12만이 구해진다. 이거는 나눗샘을 그려서 직접 해보면 원인이 보인다.
//시간복잡도, 메모리 효율

// const divisors = function (n) {
//   let divide = [];
//   for (let i = 0; i <= n; i++) n % i === 0 ? divide.push(i) : "";
//   return divide;
// };

// const add = function (divide) {
//   return divide.reduce((acc, curr) => acc + curr);
// };

// const solution = (n) => add(divisors(n));

// console.log(solution(16));

//방법1:
// function divsors(n) {
//   let divide = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       divide.push(i);
//     }
//   }
//   return divide;
// }

// let sum = function (divide) {
//   let answer = 0;
//   for (let i = 0; i < divide.length; i++) {
//     answer += divide[i];
//   }
//   return answer;
// };

// let solution = function (n) {
//   return sum(divsors(n));
// };

// console.log(solution(12));

//방법2
// function divsors(n) {
//   let divide = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0) {
//       divide.push(i);
//     }
//   }

//   let answer = 0;
//   for (let i = 0; i < divide.length; i++) {
//     answer += divide[i];
//   }

//   return answer;
// }
// console.log(divsors(12));

//방법3
// function answer(n) {
//   let divide = 0;
//   for (let i = 1; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       divide += i;
//       divide += n / i;
//     }
//   }
//   //   if (Math.sqrt(n) % 1 === 0) {
//   //     divide -= Math.sqrt(n);
//   //   }
//   return divide;
// }
//n= 12  -> 1, 2, 3, 4 (=12/3 ), 6 (= 12/2), 12 (=12/1)
// 루트가 정수인 경우 16 (4)
// 루트가 정수가 아닌 경우 12 (3.xxx)

//console.log(answer(12));

//31 35
//12 -> 28  // 3.xx
//16 -> 31  //35 4*4

//Math.sqrt() 란 뭘까?
// for (let i = 0; i <= Math.sqrt(n); i++) {
//   if (n % 1 === 0) {
//     console.log(`${i}와 ${n / i}는 n의 약수입니다.`);
//     //n= 12  -> 1, 2, 3, 4, 6, 12,
//   }
// }

//5. 나머지가 1이 되는 수 찾기
//n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return 하도록 solution 함수를 완성해주세요. 답이 항상 존재함은 증명될 수 있습니다. n%x=1
//n을 x로 나눈 나머지가 1이 된다. n%x=1
// function solution(n) {
//   var answer = [];
//   for (let i = 1; i <= n; i++) {
//     if (n % i === 1) {
//       answer.push(i);
//     }
//   }
//   return answer[0];
// }
// console.log(solution(10));

//n을 x로 나눈다 + 나머지가 1이 된다.
////가장 작은 자연수를 구한다.

// const solution = function (n) {
//   let i = 0;
//   while (i <= n) {
//     if (n % i === 1) {
//       return i;
//     }
//     i++;
//   }
//   return i;
// };

// console.log(solution(12));

//6. x만큼 간격이 있는 n개의 숫자
//함수 solution은 정수 x와 자연수 n을 입력 받아,
//x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴해야 합니다.
//다음 제한 조건을 보고, 조건을 만족하는 함수, solution을 완성해주세요.
//[2,4,6,8,10]
// function solution(x, n) {
//   var answer = [x];
//   //trouble shooting if와 for를 같이 써야할 때 if안에 for를 쓰면 지 혼자 돌고 유효성검사를 안한다.
//   for (let i = 0; i <= n; i++) {
//     answer.push(answer[i] + x); //나는 이거를 꼭 더해야 한다고 생각했고.. 사실은 i에 해당 숫자를 곱해도 되는 거였음.
//     // if (answer.length < n) {
//     // }
//   }
//   return answer;
// }

// function solution(x, n) {
//   var answer = [];
//   for (let i = 1; i <= n; i++) {
//     answer.push(x * i);
//   }
//   return answer;
// }
// console.log(solution(2, 5));

// const solution = function (x, n) {
//   let answer = [];
//   let i = 1;
//   while (i <= n) {
//     answer.push(i * x);
//     i++;
//   }
//   return answer;
// };
// console.log(solution(-4, 2));

//7. 자연수 뒤집어 배열로 만들기
//자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.
//자리를 뒤바꾸기 = 인덱스를 바꿔서 다시 넣는다.
// function solution(n) {
//   var result = [];
//   var answer = n.toString().split("").map(Number); /
//   for (let i = answer.length - 1; i >= 0; i--) {
//     result.push(answer[i]);
//   }
//   return result;
// }

// function solution(n) {
//   return n
//     .toString()
//     .split("")
//     .reverse()
//     .map((o) => (o = parseInt(o)));
// }
// console.log(solution(123645));

// const solution = function (n) {
//   let toNumber = (a) => parseInt(a);
//   return n.toString().split("").reverse().map(toNumber);
// };
// console.log(solution(12345));

//8. 문자열을 정수로 바꾸기   => 문제 이해 자체가 되지를 않음...
//문자열 s를 숫자로 변환한 결과를 반환하는 함수, solution을 완성하세요.
// function solution(s) {
//   return +s;
// }
// console.log(solution("-1234"));

//9. 정수 제곱근 판별
//임의의 양의 정수 n에 대해, n이 어떤 양의 정수 x의 제곱인지 아닌지 판단하려 합니다.
//n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴하고, n이 양의 정수 x의 제곱이 아니라면 -1을 리턴하는 함수를 완성하세요.
// function solution(n) {
//   if (Number.isInteger(Math.sqrt(n))) {
//     return Math.pow(Math.sqrt(n) + 1, 2);
//   } else {
//     return -1;
//   }
// }

// function solution(n) {
//   switch (n % Math.sqrt(n)) {
//     case 0:
//       return Math.pow(Math.sqrt(n) + 1, 2);
//       break;
//     default:
//       return "no";
//       break;
//   }
// }
// console.log(solution(121));

//n이 어떤 수의 제곱근인지 확인
//양의 정수 제곱근이라면 제곱근 x+1을 리턴 : -1
// const squareRoot = function (n) {};
// console.log(squareRoot(121));
// const isReturned = function () {};
// const solution = function (n) {};
// console.log(solution(121));

//10. 정수 내림차순으로 배치하기
//함수 solution은 정수 n을 매개변수로 입력받습니다. n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴해주세요. 예를들어 n이 118372면 873211을 리턴하면 됩니다.
// function solution(n) {
//   return (answer = parseInt(
//     n
//       .toString()
//       .split("")
//       .sort((a, b) => b - a)
//       .join("")
//   ));
// }
// console.log(solution(118372));

// const solution = function (n) {
//   let down = (a, b) => b - a;
//   return parseInt(n.toString().split("").sort(down).join(""));
// };
// console.log(solution(118372));

//11. 하샤드 수
//양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야 합니다.  => 자리수를 분리해서 배열로
//예를 들어 18의 자릿수 합은 1+8=9이고, => 각 인덱스 값의 합
//18은 9로 나누어 떨어지므로 18은 하샤드 수입니다.  => 각 인덱스 값의 합이 x로 나누었을 때 정수인지 is정수 메서드 사용
// 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 검사하는 함수, solution을 완성해주세요. => if else,, 근데 숫자면 true를 반환하고 0이면 false를 반환하게 하는 식은 어떤지 생각
//트러블슈팅: var answer = []; // answer.push(x.toString().split("").map(Number)); // [ [ 1, 0 ] ]
// function solution(x) {
//   var answer = [...x.toString()];
//   let result = 0;
//   for (let i = 0; i < answer.length; i++) {
//     result += parseInt(answer[i]);
//   }
//   return Number.isInteger(x / result) ? true : false;
// }
// console.log(solution(10));

//자리수를 분배해서 배열로 + 각 인덱스 값의 합
//합이 x로 나누어 떨어지나 확인
// const haShadNum = function (x) {
//   let add = (acc, curr) => acc + curr;
//   let num = [...x.toString()].map(Number).reduce(add, 0);
//   return x % num === 0 ? true : false;
// };

// console.log(haShadNum(12));

//12. 두 정수 사이의 합
//두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
//예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.
//a와 b의 대소관계는 정해져있지 않습니다
//트러블슈팅: for문의 다양한 활용-> i값을 거꾸로 쓸 수도 있다.
// function solution(a, b) {
//   let answer = 0;
//   let arr = [];
//   if (a === b) {
//     return a;
//   } else {
//     arr.push(a, b);
//     arr.sort((a, b) => a - b);
//     for (let i = arr[0]; i <= arr[1]; i++) {
//       answer += i;
//     }
//   }
//   return answer;
// }

// console.log(solution(3, 5));

//두 정수 사이의 값을 배열로
//배열의 합
// const solution = function (a, b) {
//   let ascendingOrder = [a, b].sort((a, b) => a - b);
//   let i = ascendingOrder[0];
//   let answer = [];
//   while (i <= ascendingOrder[1]) {
//     answer.push(i);
//     i++;
//   }
//   let add = (acc, curr) => acc + curr;
//   return answer.reduce(add);
// };
// console.log(solution(3, 5));

//13. 콜라츠 추측
//1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.

//1-1. 입력된 수가 짝수라면 2로 나눕니다.
//1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
//2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.

//예를 들어, 주어진 수가 6이라면 6 → 3 → 10 → 5 → 16 → 8 → 4 → 2 → 1 이 되어 총 8번 만에 1이 됩니다. 위 작업을 몇 번이나 반복해야 하는지 반환하는 함수, solution을 완성해 주세요. 단, 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환해 주세요.
// function solution(num) {
//   var answer = 0;
//   for (let i = num; i > 1; ) {
//     if (i % 2 === 0) {
//       i = i / 2;
//     } else {
//       i = i * 3 + 1;
//     }
//     answer++;
//   }
//   return answer <= 500 ? answer : -1;
// }

// function solution(num) {
//   var answer = 0;
//   while (num !== 1 && answer !== 500) {
//     num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
//     answer++;
//   }
//   return num === 1 ? answer : -1;
// }
// console.log(solution(16));

// const machine = function (n) {
//   let count = 0;
//   let i = n;
//   while (i !== 1 && count !== 500) {
//     if (i % 2 === 0) {
//       i = i / 2;
//     } else {
//       i = 3 * i + 1;
//     }
//     count++;
//   }
//   return count;
// };
// // const solution = function (n) {};
// console.log(machine(6));

//14. 서울에서 김서방 찾기
//String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
//findIndex() : 판별함수를 만족하는 배열의 첫 번째 요소에 대한 인덱스를 반환, 만족하는 요소가 없으면 -1을 반환한다.
// function solution(seoul) {
//   answer = [];
//   for (let i = 0; i < seoul.length; i++) {
//     seoul[i] === "Kim" ? answer.push(i) : "";
//   }
//   return `김서방은 ${answer[0]}에 있다`;
// }
// function solution(seoul) {
//   const findKim = seoul.indexOf("Kim");
//   return `김서방은 ${findKim}에 있다`;
// }
// console.log(solution(["Jane", "Kim"]));

// const solution = function (seoul) {
//   return `김서방은 ${seoul.indexOf("Kim")}에 있다. `;
// };
// console.log(solution(["Jane", "Kim"]));

//15. 나누어 떨어지는 숫자 배열
//array의 각 element 중 divisor(약수)로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
//divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
// 트러블슈팅 -> 이 부분을 length로 접근해야함   return answer[0] === "" ? -1 : answer.sort((a, b) => a - b);
// 기술매니저 님 호출!
// function solution(arr, divisor) {
//   var answer = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] % divisor === 0 ? answer.push(arr[i]) : "";
//   }
//   console.log(answer[0]); //[]
//   return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b);
//   // return answer[0] ? answer.sort((a, b) => a - b) : [-1]; //[]
//   //배열에 값이 없으면 false
// }
// console.log(solution([3, 2, 6], 10));

//d에 n을 곱했을 때 arr이가 나오는가? 나오는 수의 오름차순, 안나오면 -1
// const solution = function (arr, divisor) {
//   let answer = arr.filter((a) => a % divisor === 0);
//   let asendingOrder = (a, b) => a - b;
//   return answer.length !== 0 ? answer.sort(asendingOrder) : [-1];
// };
// console.log(solution([3, 2, 6], 10));

//16. 음양더하기
//어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
// function solution(absolutes, signs) { //fail
//   var answer = 0;
//   for (let i = 0; i < signs.length; i++) {
//     if (signs[i] === false) {
//       absolutes.push(-2 * absolutes[i]);
//       answer += absolutes[absolutes.length - 1];
//       //i--;
//     } else {
//       answer += absolutes[i];
//     }
//   }
// }  fail

// function solution(absolutes, signs) {
//   var answer = 0;
//   for (let i = 0; i < signs.length; i++) {
//     signs[i] === false ? (answer += -absolutes[i]) : (answer += absolutes[i]);
//   }
//   return answer;
// }
// console.log(solution([4, 7, 12], [true, false, true]));

//전체에서 false만 음수로 바꿔
// const solution = function (absolutes, signs) {
//   let falseIndex = [];
//   signs.filter((a, i) => (a === false ? falseIndex.push(i) : ""));
//   let addMinus = (e, i) => (falseIndex.includes(i) ? -1 * e : e);
//   let sum = (acc, curr) => acc + curr;
//   return absolutes.map(addMinus).reduce(sum, 0);
// };
// console.log(solution([1, 2, 3], [false, false, true]));

//17. 핸드폰 번호 가리기
//프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
//전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
// function solution(phone_number) {
//   return (answer = [...phone_number]
//     .fill("*", 0, [...phone_number].length - 4)
//     .join(""));
// }
// console.log(solution("01033334444"));

// function solution(phone_number) {
//   return Array.from(phone_number)
//     .fill("*", 0, phone_number.length - 4)
//     .join("");
// }
// console.log(solution("01033334444"));

//18. 없는 숫자 더하기
//0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
// function solution(numbers) {
//   let numberArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let numberfinal = numberArr.filter((a) => !numbers.includes(a));
//   let answer = 0;
//   numberfinal.forEach((element) => {
//     answer += element;
//   });
//   return answer;
// }
// console.log(solution([5, 8, 4, 0, 6, 7, 9]));

// function solution(numbers) {
//   //초기값 선언
//   let answer = [];
//   for (let i = 0; i <= 9; i++) {
//     answer = numbers.map((item) => item !== i);
//   }
//   console.log(answer);
//   console.log(number);

//   //각각의 수가 0-9ㅇ에 있는지 확인한다. -> while
//   //없는 것만 리턴한다.
//   //그것들을 더한다.
// }
// console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

//19. 제일 작은 수 제거하기
//정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수,
//solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
// function solution(arr) {
//   let array = [...arr];
//   let remove = array.sort((a, b) => a - b)[0];
//   let answer = arr.filter((a) => a !== remove);
//   return arr.length === 1 ? [-1] : answer;
// }
// console.log(solution([10]));

//20. 가운데 글자 가져오기
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
// function solution(s) {
//   var answer = [];
//   var S = s.split("");
//   if (S.length % 2 === 1) {
//     return S[Math.floor(S.length / 2)];
//   } else {
//     answer = [S[S.length / 2 - 1], S[S.length / 2]];
//     return answer.join().replace(/\,/g, "");
//   }
// }
// console.log(solution("qwer"));

// 암시적형변환 + a;
// a * 1;
// +"1";
// "1" * 1;

//21. 수박수박수박수박수?
//길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
// function solution(n) {
//   let arr = Array(n).fill(0);
//   arr.forEach((item, index) =>
//     index % 2 === 0 ? (arr[index] = "수") : (arr[index] = "박")
//   );
//   return arr.join("");
// }
// console.log(solution(4));

//22. 내적
//길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
//이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)
// function solution(a, b) {
//   var answer = 0;
//   let newArr = a.map((currentValue, index) => b[index] * currentValue);
//   let sum = newArr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//   );
//   return sum;
// }
// console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));

//23. 약수의 개수와 덧셈
//두 정수 left와 right가 매개변수로 주어집니다.
//left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
// function solution(left, right) {
//   var arrIndex = [];
//   let arrFinal = Array(right)
//     .fill(0)
//     .forEach(function (value, index) {
//       arrIndex.push(index + 1);
//     });
//   let arr = arrIndex.splice(left - 1); //[ 13, 14, 15, 16, 17 ]
//   let final = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let a = 0; a <= right; a++) {
//       //let newArr = arr.map((a) => (arr[i] % a === 0 ? final.push(a) : 0));
//       if (arr[i] % a === 0) {
//         final.push(a);
//       }
//       console.log(newArr);
//     }
//   }
// }
// console.log(solution(13, 17));

//13 => 1 13 => 2 => +
//14 => 1 2 7 14 => 4 => +
//15 => 1 3 5 15 => 4 => +
//16 => 1 2 4 8 16 => 5 => -
//17 => 1 17 => 2 => +

//24. 문자열 내림차순으로 배치하기
//문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
//s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
// function solution(s) {
//   var answer = Array.from(s);
//   return answer.sort((a, b) => (a < b ? 1 : -1)).join("");
// }
// console.log(solution("Zbcdefg"));

//25.부족한 금액 계산하기
//새로 생긴 놀이기구는 인기가 매우 많아 줄이 끊이질 않습니다. 이 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 하였습니다. 즉, 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상됩니다.
//놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return 하도록 solution 함수를 완성하세요.
//단, 금액이 부족하지 않으면 0을 return 하세요.

// function solution(price, money, count) {
//   var answer = Array(count).fill(1);
//   let result = answer.reduce((acc, value, i) => acc + price * (i + 1), 0);
//   return result - money > 0 ? result - money : 0;
// }
// console.log(solution(3, 20, 4));

//기술

//...1
// map메서드를 직접 구현하자
//Array: 생성자함수
// Array.prototype.mapaaa = function (callback, thisArg) {
//   var mappedArr = [];
//   for (var i = 0; i < this.length; i++) {
//     //이 밑 부분이 이해가 안됨
//     var mappedValue = callback.call(thisArg || global, this[i]);
//     mappedArr[i] = mappedValue;
//   }
//   return mappedArr;
// };

// const a = [1, 2, 3].mapaaa((item) => {
//   return item * 2;
// });

// console.log(a);

//...2
// var obj1 = {
//   name: "obj1",
//   func: function () {
//     //var self = this;
//     console.log(this);
//     // return function () {
//     //   console.log(self.name);
//     // };
//   },
// };

// var callback = obj1.func();
// setTimeout(callback, 1000);
// // 1. obj1.func로 호출했을 때 밖의 this는 setTimeout을 바라봄
// // 2. obj1.func()로 호출했을 때 밖의 this는 obj1을 바라봄
// // 이 차이가 왜 생길까..?

//...3
//클로져...?
// var obj1 = {
//   name: "obj1",
//   func: function () {
//     var self = this; //이 부분!**
//     return function () {
//       console.log(self.name);
//     };
//   },
// };

// var obj3 = { name: "obj3" };

// //그리고  아래랑 위랑은 무슨 차이야? (call, bind)
// // //아랫 줄이 func는 되는데 func()는 안되는 이유가 뭐야?
// setTimeout(obj1.func().call(obj3), 1000); //err
// setTimeout(obj1.func.call(obj3), 1000); //obj3
// setTimeout(obj1.func.call(obj3)(), 1000); //err

// // 밑에 두개는 ()의 위치가 왜 차이가 나면서 왜 가리키는게 달라져?
// setTimeout(obj1.func().bind(obj3), 1000); //obj1
// setTimeout(obj1.func.bind(obj3), 1000); //아무것도 안뜸
// setTimeout(obj1.func.bind(obj3)(), 1000); //obj3

//31. 문자열 다루 기본
//문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
// function solution(s) {
//   let arr = s.split("");
//   if (arr.length === 4 || arr.length === 6) {
//     let arrNum = arr.filter((a) => /\d/g.test(a));
//     return arrNum.length === arr.length ? true : false;
//   } else {
//     return false;
//   }
// }
// console.log(solution("sd3456"));

//32. 행렬의 덧셈
//행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
// function solution(arr1, arr2) {
//   let row = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let x = [];
//     for (let k = 0; k < arr1[0].length; k++) {
//       num = arr1[i][k] + arr2[i][k];
//       x.push(num);
//     }
//     row.push(x);
//   }
//   console.log(row);
//   return row;
// }

// solution(
//   [[1, 2],[2, 3]],[[3, 4],[5, 6] ]
// );

//33. 직사각형 별찍기
//이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
//별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

// function solution(n, m) {   //막힘
//   let star = Array(n).fill("*").join("");
//   let starArr = "" + "\n";
//   for (let i = 0; i < m; i++) {
//     //let starArr = Array(1).fill(star).join("");
//     starArr += Array(1).fill(star).join("");
//     console.log(starArr);
//   }
//   return starArr;
// }

// function solution(n, m) {
//   let starArr = "";
//   for (let i = 0; i < m; i++) {
//     let star = "" + "\n";
//     for (let j = 0; j < n; j++) {
//       star += "*";
//     }
//     starArr += star;
//   }
//   return starArr;
// }

// console.log(solution(5, 3));

//34. 최대공약수와 최소공배수
//두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.
// function solution(n, m) {  // try1
//   var answer = [];
//   let divisorsN = [];
//   let divisorsM = [];
//   for (let i = n; i >= 1; i--) {
//     if (n % i === 0) {
//       divisorsN.push(i);
//     }
//   }
//   for (let i = m; i >= 1; i--) {
//     if (m % i === 0) {
//       divisorsM.push(i);
//     }
//   }
//   console.log(divisorsM);
//   console.log(divisorsN);
//   let maxDivisor = divisorsM.find((a) => a === divisorsN[a]);
//   console.log(maxDivisor);
// }

// function solution(n, m) {
//   let gcf = 0;
//   let lcm = 0;
//   for (let i = 1; i <= Math.min(n, m); i++) {
//     if (n % i === 0 && m % i === 0) gcf = i;
//   }
//   for (let i = Math.max(n, m); i <= m * n; i++) {
//     if (i % n === 0 && i % m === 0) {
//       lcm = i;
//       break;
//     }
//   }
//   return [gcf, lcm];
// }
// console.log(solution(2, 5));

//35.3진법 뒤집기
//자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
//toString -> 진법 변환, parseInt(,2) -> 진법 변환
// function solution(n) {
//   var answer = 0;
//   return answer;
// }
// console.log(solution(45));

//36. 이상한 문자 만들기
//문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// const uppercaseArr = (a) => a.toUpperCase().split("");

// const findIndex = function (uppercaseArr) {
//   let answer = [];
//   for (let i = 0; i < uppercaseArr.length; i++) {
//     let final = i % 2 === 1 ? uppercaseArr[i].toLowerCase() : uppercaseArr[i];
//     answer.push(final);
//   }
//   console.log(answer.join(""));
//   return answer.join("");
// };

// function solution(a) {
//   return findIndex(uppercaseArr(a));
// }

// let a = "Hello my name i jiu";
// solution(a);

//37. 삼총사
//한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다.
//이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다.
//예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다.
//또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.
//한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

//2개의 수를 더했을 때 동일한 절댓값이 있다면
// 양수인 경우와 음수인 경우와 나누기
//(모든) 무작위 2개의 수 더하기 -> 새로운 배열에 넣기
//새로운 배열의 수와 반대편 값을 비교해서 동일한 숫자를 카운트
// let number = [-2, 3, 0, 2, -5];
// const plusNum = (a) => a >= 0;
// const minusNum = (a) => a <= 0;
// const plusArr = (number) => number.filter(plusNum); //[ 3, 0, 2 ]
// const minusArr = (number) => number.filter(minusNum); //[ -2, 0, -5 ]

// const randomAdd = function (plusArr) {};

// console.log(minus(number));

//test
//1. 문열이의 잔돈 계산기 (1점)
//설명) 문열이가 1000원을 가지고 편의점에서 물건을 사려고 한다.
//편의점에는 500원, 100원, 50원, 10원이 충분히 있고, 편의점 직원은 언제나 거스름돈 개수가 가장 적게 잔돈을 준다.
//=>500원을 많이 주면 거스름돈의 개수가 작아지지..?
//문열이가 편의점에서 물건을 사고 1000원 지폐 한 장을 냈을 때, 받을 잔돈의 개수를 구하는 프로그램을 작성하여라.
//1000-num /
//(단, 물건의 가격은 10원 이상 1000원 미만이며, 1원 단위는 고려하지 않는다.)

// function solution(num) {
//   let leftMoney = 1000 - num;
//   let change = [500, 100, 50, 10];
//   let count = 0;
//   let i = 0;
//   while (leftMoney !== 0) {
//     leftMoney %= change[i];
//     count += Math.floor(leftMoney / change[i]);
//     i++;
//   }
//   return count;
// }
// let num1 = 160;
// console.log(solution(num1));

//2. 재현이의 체크인  페이지 (2)
//💡 설명) 재현이는 항해에서 한 주 동안 공부 기록을 남길 알고리즘을 만들어보기로 결심했다.
//항해의 체크인 페이지에는 몇가지 조건이 있는데 이를 만족하는 알고리즘을 만들어보자.
//- 체크인과 체크아웃은 항상 정시에 진행한 것으로 가정한다.
//- 체크아웃을 할 때 익일 시간은 24+a 로 계산한다. 즉 새벽 2시는 24+2 인 26으로 표기한다.
//- 체크인 페이지는 체크아웃이 새벽 5시 정각이나 새벽 5시를 넘어가면 체크아웃을 깜빡한 것으로 간주한다.
//==29이상이면 21로 바꾼다.
//따라서 새벽 5시가 넘어가 체크아웃을 하게 되면 자동으로 체크아웃을 오후 9시(21시)로 한 것으로 처리한다.

// let arr1 = [9, 9, 9, 9, 7, 9, 8];
// let arr2 = [23, 23, 30, 28, 30, 23, 23];

// function solution(arr1, arr2) {
//   let studyTime = (a, i) => {
//     return arr2[i] < 29 ? arr2[i] - a : 21 - a;
//   };
//   let addTime = (acc, curr) => acc + curr;
//   return (answer = arr1.map(studyTime, 0).reduce(addTime));
// }

// console.log(solution(arr1, arr2));

//3. 소수찾기(3)
//설명) 문자열 s에는 공백으로 구분된 숫자들이 저장되어 있습니다.
//현지는 s에 나타나는 숫자 중
//소수의 최대값과
//소수가 아닌 수의 최소값
//을 찾아 이를 "(최소값) (최대값)"형태의 문자열을 반환하는 함수, solution을 완성하려고 합니다.
//예를들어 s가 "2 3 4 5"라면 "4 5"를 리턴하고, "15 3 10 9 7 8"라면 "8 7"을 리턴하면 됩니다.

//소수: 1과 자기자신으로 나뉘는 수
//1부터 n까지의 수로 다 나누어 봤더니 나머지가 0인 배열중 length가 2인거
//소수의 최대값: length가 2인 수 중에서 최대값
//소수가 아닌 수: length가 3이상인수 중에서 최소값
// function solution(s) {
//   let numArr = s.toString().split(" ").map(Number);
//   let DivisorsArr = [];
//   for (let i = 0; i < numArr.length; i++) {
//     let divisors = [];
//     for (let j = 1; j <= numArr[i]; j++) {
//       numArr[i] % j === 0 ? divisors.push(j) : "";
//     }
//     DivisorsArr.push(divisors);
//   }

//   let ascendingOrder = (a, b) => a - b;
//   let descendingOrder = (a, b) => b - a;
//   let isPrimeNum = (a) => a.length === 2;
//   let isNotPrimeNum = (a) => a.length >= 3;
//   maxArr = DivisorsArr.filter(isPrimeNum).sort(ascendingOrder)[0];
//   minArr = DivisorsArr.filter(isNotPrimeNum).sort(descendingOrder)[0];
//   console.log(maxArr);
//   console.log(minArr);
//   return minArr[minArr.length - 1] + " " + maxArr[1];
// }
// let s = "97 75 88 99 95 92 73";
// console.log(solution(s));
