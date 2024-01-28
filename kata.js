//1. 두 수의 차
// function solution(num1, num2) {
//   return (answer = num1 - num2);
// }
// console.log(solution(2, 3));

//2. 두 수의 곱
// function solution(num1, num2) {
//   return num1 * num2;
// }
// console.log(solution(3, 4));

//3. 두 수의 곱
// function solution(num1, num2) {
//   return num1 / num2;
// }
// console.log(solution(10, 5));

//4. 나이 출력
// function solution(age) {
//   return 2022 - age + 1;
// }
// console.log(solution(40));

//5. 숫자 비교하기
// function solution(num1, num2) {
//   return num1 === num2 ? 1 : -1;
// }
// console.log(solution(2, 3));

//6. 두 수의 합
// function solution(num1, num2) {
//   return num1 + num2;
// }
// console.log(solution(2, 3));

//7. 두 수의 나눗셈
// function solution(num1, num2) {
//   return Math.floor((num1 / num2) * 1000);
// }
// console.log(solution(7, 3));

//8. 각도기
// function solution(angle) {
//   return 0 < angle && angle < 90
//     ? 1
//     : angle === 90
//     ? 2
//     : 90 < angle && angle < 180
//     ? 3
//     : angle === 180
//     ? 4
//     : null;
// }
// console.log(solution(70));

//9. 짝수의 합
// function solution(n) {
//   answer = 0;
//   for (let i = 0; i <= n; i++) {
//     i % 2 === 0 ? (answer += i) : null;
//   }
//   return answer;
// }

// console.log(solution(10));

//10. 배열의 평균 값
// function solution(numbers) {
//   let answer = 0;
//   numbers.forEach((element) => {
//     answer += element;
//   });
//   return answer / numbers.length;
// }

// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

//11 짝수와 홀수
// function solution(num) {
//   return num % 2 === 0 ? "Even" : "Odd";
// }

// console.log(solution(3));

//12 평균구하기
// function solution(arr) {
//   let answer = 0;
//   arr.forEach((e) => (answer += e));
//   return answer / arr.length;
// }

// console.log(solution([1, 2, 3, 4]));

//13.자리수 더하기
// function solution(n) {
//   return [...n.toString()].map(Number).reduce((acc, curr) => acc + curr);
// }

// console.log(solution(987));

//14. 약수의 합
// function solution(n) {
//   let answer = 0;
//   let i = 0;
//   while (i <= n) {
//     n % i === 0 ? (answer += i) : null;
//     i++;
//   }
//   return answer;
// }

// console.log(solution(5));

//15. 나머지가 1이 되는 수 찾기
// function solution(n) {
//   let i = 0;
//   while (i <= n) {
//     if (n % i === 1) {
//       return i;
//     } else {
//       i++;
//     }
//   }
//   return i;
// }

// console.log(solution(10));

//16. x만큼 간격이 있는 n개의 숫자
// function solution(x, n) {
//   //2부터 2*5까지의 숫자중에 2의 배수
//   let answer = [];
//   let i = x;
//   while (i <= x * n) {
//     answer = i.map((a) => a % 2 === 0);
//     i++;
//   }
//   return answer;
// }

// console.log(solution(2, 5));

//17. 자연수 뒤집어 배열로 만들기
// function solution(n) {
//   return n.toString().split("").reverse();
// }

// console.log(solution(12345));

//18. 문자열을 정수로 바꾸기
// function solution(n) {
//   return n.map(Number);
// }

// console.log(solution(1234));

//19. 정수 제곱근 판별
// function solution(n) {
//   return Number.isInteger(Math.sqrt(n))
//     ? // ? (Math.sqrt(n) + 1) * (Math.sqrt(n) + 1)
//       Math.pow(Math.sqrt(n) + 1, 2)
//     : -1;
// }

// console.log(solution(121));

//20. 정수 내림차순으로 배치하기
// function solution(n) {
//   return parseInt(
//     n
//       .toString()
//       .split("")
//       .sort((a, b) => b - a)
//       .join("")
//   );
// }

// console.log(solution(118372));

//21. 하샤드 수
// function solution(x) {
//   //자리수 합
//   const add = (x) => {
//     return (addX = x
//       .toString()
//       .split("")
//       .map(Number)
//       .reduce((acc, curr) => acc + curr));
//   };
//   //나누기
//   const divide = (x) => (x % add(x) === 0 ? true : false);
//   return divide(x);
// }

// console.log(solution(11));

//22. 두 정수 사이의 합
//함수에 넣으면 안됨**
// function solution(a, b) {
//   //오름차순
//   const ascend = [a, b].sort((a, b) => a - b);
//   const Arr = [];
//   // 두 정수 사이의 값
//   const numArr = (ascend) => {
//     let i = ascend[0];
//     while (i <= ascend[1]) {
//       Arr.push(i);
//       i++;
//     }
//   };
//   console.log(numArr(ascend));
//   //그들의 합
//   // return Arr.reduce((acc, curr) => acc + curr);
// }

// console.log(solution(3, 5));

//함수에서 빼면 잘 됨**
// function solution(a, b) {
//   //오름차순
//   const ascend = [a, b].sort((a, b) => a - b);
//   const Arr = [];
//   // 두 정수 사이의 값

//   let i = ascend[0];
//   while (i <= ascend[1]) {
//     Arr.push(i);
//     i++;
//   }
//   return Arr.reduce((acc, curr) => acc + curr);

//   console.log(numArr(ascend));
//   //그들의 합
//   // return Arr.reduce((acc, curr) => acc + curr);
// }

// console.log(solution(3, 5));

// //23. 콜라츠의 추측
// function solution(n) {
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

// console.log(solution(6));

//24.서울에서 김서방 찾기
// function solution(seoul) {
//   return `김서방은 ${seoul.indexOf("Kim")}에 있다.`;
// }
// console.log(solution(["Jane", "Kim"]));

//25. 나누어 떨어지는 숫자 배열
// function solution(arr, divisor) {
//   let answer = arr.filter((a) => a % divisor === 0);
//   return answer[0] ? answer.sort((a, b) => a - b) : [-1];
// }
// console.log(solution([3, 2, 6], 10));

//26. 음양 더하기
// function solution(absolutes, signs) {
//   let falseIndex = [];
//   signs.map((item, i) => {
//     item === false ? falseIndex.push(i) : "";
//   });

//   const addMinus = absolutes.map((item, i) => {
//     return falseIndex.includes(i) ? -item : item;
//   });
//   return addMinus.reduce((acc, curr) => acc + curr);
// }
// console.log(solution([1, 2, 3], [false, false, true]));

//27.  핸드폰 번호 가리기
// function solution(phone_number) {
//   const lastNum = phone_number.length - 1;
//   return [...phone_number].fill("*", 0, lastNum - 3).join("");
// }
// console.log(solution("01033334444"));

//28. 없는 숫자 더하기
// function solution(numbers) {
//   let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   let answer = arr.filter((item) => !numbers.includes(item));
//   return answer.reduce((acc, curr) => acc + curr);
// }

// console.log(solution([5, 8, 4, 0, 6, 7, 9]));

//29 제일 작은 수 제거하기
// function solution(arr) {
//   //원본 배열이 바뀌기 싫을 때는 꼭 소팅 전 copy를 해주어야 한다.
//   let remove = [...arr].sort((a, b) => a - b)[0];
//   let answer = arr.filter((item) => item !== remove);
//   return answer.length >= 1 ? answer : [-1];
// }

// console.log(solution([4, 3, 2, 1]));

//30 가운데 글자 가져오기
// function solution(s) {
//   if (s.length % 2 === 0) {
//     return [s[s.length / 2 - 1], s[s.length / 2]].join("");
//   } else {
//     return s[Math.floor(s.length / 2)];
//   }
// }

// console.log(solution("abcde"));

//31. 수박수박수박수박
// function solution(n) {
//   const arr = Array(n).fill("0");
//   arr.forEach((e, i) => (i % 2 === 0 ? (arr[i] = "수") : (arr[i] = "박")));
//   return arr.join("");
// }

// console.log(solution(3));

// //32. 내적
// function solution(a, b) {
//   let answer = [];
//   let i = 0;
//   while (i < a.length) {
//     answer.push(a[i] * b[i]);
//     i++;
//   }
//   return answer.reduce((acc, curr) => acc + curr);
// }

// console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));

//33. 약수와 개수와 덧셈
// function solution(left, right) {
//   //수를 구한다.
//   let arr = [];
//   let i = left;
//   while (i <= right) {
//     arr.push(i);
//     i++;
//   }

//   //약수를 구해서 개수를 센다.
//   let result = 0;
//   arr.forEach((e, i) => {
//     //약수 담을 공간
//     let answer = [];
//     //약수 담기
//     for (let k = 0; k <= e; k++) e % k === 0 ? answer.push(k) : null;
//     //약수 개수
//     let count = answer.length;
//     //짝홀 분별
//     let countFinal = count % 2 === 0 ? e : -e;
//     result += countFinal;
//   });
//   return result;
// }

// console.log(solution(13, 17));

// //34. 문자열 내림차순으로 배치하기
// function solution(s) {
//   let answer = Array.from(s);
//   return answer.sort().reverse().join("");
// }

// console.log(solution("Zbdcefg"));

//35. 문자열 내림차순으로 배치하기
// function solution(price, money, count) {
//   let i = 1;
//   const a = [];
//   let answer = 0;
//   while (i <= count) {
//     a.push(i);
//     answer = price * a.reduce((acc, curr) => acc + curr);
//     i++;
//   }
//   return answer - money > 0 ? answer - money : 0;
// }

// console.log(solution(3, 20, 4));

//36. 문자열 다루기 기본
// function solution(s) {
//   let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
//   if (s.length === 4 || s.length === 6) {
//     let filtered = [];
//     for (let i = 0; i < num.length; i++) {
//       // console.log(num[i].includes(s[i]));
//       // console.log(s.includes(num[i]));
//       filtered.push([...s].filter((a) => a.includes(num[i])));
//     }
//     console.log(filtered);
//   }
//   // else {
//   //   return false;
//   // }
// }

// function solution(s) {
//   var temp = parseInt(s);
//   if (s.length === 4 || s.length === 6) {
//     if (s == temp) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }

// console.log(solution("4444"));

//37. 행렬의 덧셈
// function solution(arr1, arr2) {
//   return [
//     [arr1[0][0] + arr2[0][0], arr1[0][1] + arr2[0][1]],
//     [arr1[1][0] + arr2[1][0], arr1[1][1] + arr2[1][1]],
//   ];
//   if (arr1.length === arr2[0].length) {
//     let row = [];
//     for (let k = 0; k < arr1.length; k++) {
//       x = [];
//       let num = 0;
//       for (let j = 0; j < arr1.length; j++) {
//         num = arr1[k][j] + arr2[k][j];
//         x.push(num);
//       }
//       row.push(x);
//     }
//     return row;
//   }
// }

// console.log(
//   solution(
//     [
//       [1, 2],
//       [2, 3],
//     ],
//     [
//       [3, 4],
//       [5, 6],
//     ]
//   )
// );

//38. 직사각형 별찍기
// function solution(n, m) {
//   var a = "";
//   for (let i = 0; i < m; i++) {
//     a += Array(n).fill("*").join("") + "\n";
//   }
//   return a.trim("");
// }

// console.log(solution(5, 3));

//39. 최대공약수와 최소공배수
// function solution(n) {
//   const a = n.toString(3);
//   const reverse = [...a].reverse().join("");
//   return parseInt(reverse, 3);
// }

// console.log(solution(45));

//41. 이상한 숫자 만들기
// function solution(s) {
//   const toArr = [...s];
//   const uppercase = [];
//   toArr.forEach((element, i) => {
//     uppercase.push(i % 2 === 0 ? toArr[i].toUpperCase() : toArr[i]);
//   });
//   const answer = uppercase.join("");
//   return answer;
// }

// function solution(s) {
//   return s
//     .split("")
//     .map((char, i) => (i % 2 === 0 ? char.toUpperCase() : char.toLowerCase()))
//     .join("");
// }

// console.log(solution("try hello world"));

//42. 삼총사
// function solution(number) {
//   // var answer = 0;
//   let count = 0;
//   for (let i = 0; i < number.length; i++) {
//     console.log("number", number);
//     const arrI = [...number];
//     answer = number.splice(i, 1)[0];
//     console.log("number", number);
//     for (let j = 0; j < number.length - 1; j++) {
//       const arrJ = [...arrI];
//       // answer1 = answer + number[j];
//       answer1 = answer + number.splice(j, 1)[0];
//       console.log("number", number);
//       for (let k = 0; k < number.length - 2; k++) {
//         const arrK = [...arrJ];
//         answer2 = answer1 + number[k];
//         console.log("number", number);
//         console.log(answer2);
//         answer2 === 0 ? count++ : null;
//         number = arrK;
//       }
//     }
//   }
//   console.log("count", count);
//   return answer;
// }
// console.log(solution([-2, 3, 0, 2, -5]));

// function solution(number) {
//   let count = 0;

//   for (let i = 0; i < number.length - 2; i++) {
//     const arrI = [...number];
//     const sumI = arrI.splice(i, 1)[0];

//     for (let j = 0; j < arrI.length - 1; j++) {
//       const arrJ = [...arrI];
//       const sumJ = sumI + arrJ.splice(j, 1)[0];

//       for (let k = 0; k < arrJ.length; k++) {
//         const arrK = [...arrJ];
//         const sumK = sumJ + arrK[k];

//         console.log("Current combination:", [sumI, arrJ[j], arrK[k]]);
//         console.log("Sum:", sumK);

//         // Check if the sum is close to 0
//         if (Math.abs(sumK) < Number.EPSILON) {
//           count++;
//         }
//       }
//     }
//   }

//   console.log("Count:", count);
// }

// console.log(solution([-2, 3, 0, 2, -5]));

//43. 크기가 작은 부분문자열
// function solution(t, p) {
//   var answer = 0;
//   var arr = [];
//   for (let i = 0; i < t.length - (p.length + 1); i++) {
//     // var a = t[i] + t[i + 1] + t[i + 2];
//     //자리수 끊기
//     for (let k = i + 1; k < p.length; k++) {
//       //자리수를 끊어서 몇개씩 끊을지
//       if (i === 0) {
//         return t[0];
//       } else {
//         var a = t[k];
//       }
//     }
//     arr.push(a);
//   }
//   console.log(arr);
//   arr.forEach((element) => {
//     parseInt(element) <= parseInt(p) ? answer++ : null;
//   });
//   return answer;
// }
// console.log(solution("500220839878", "7")); //12자리 1자리

// function solution(t, p) {
//   var answer = 0;
//   var arr = [];
//   //t의 인덱스 처음부터 p의 길이만큼 끊는다.
//   for (let i = 0; i < t.length + 1 - p.length; i++) {
//     // console.log(t[i]);
//     var arr1 = [];
//     for (let k = 0; k < p.length; k++) {
//       var n = [];
//       n.push(t[k]);
//       console.log(n);
//       arr1.push(n);
//     }
//     arr.push(t[i]);
//   }
//   // 끊은 인덱스들을 배열에 담는다.
//   //담은 배열의 각 인덱스가 p보다 작거나 같은 것의 수를 센다. - 비교할 때 숫자열로 바꾼다.
//   // console.log(arr);
//   return answer;
// }
// console.log(solution("3141592", "271")); // 7 / 1

//42. 삼총사
//한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

// function solution(number) {
//   var answer = [];
//   for (let i = 0; i < number.length; i++) {
//     for (let k = i + 1; k < number.length; k++) {
//       for (let x = k + 1; x < number.length; x++) {
//         answer.push(number[x] + number[k] + number[i]);
//       }
//     }
//   }
//   return answer.filter((item) => item === 0).length;
// }
// console.log(solution([-2, 3, 0, 2, -5]));

//44. 직사각형
// function solution(sizes) {
//   var ascending = [];
//   for (let i = 0; i < sizes.length; i++) {
//     var ascendingEach = sizes[i].sort((a, b) => b - a);
//     ascending.push(ascendingEach);
//   }

//   var indexzero = [];
//   for (let i = 0; i < ascending.length; i++) {
//     indexzero.push(ascending[i][0]);
//   }
//   indexzero.sort((a, b) => b - a);
//   const x = indexzero[0];

//   var indexone = [];
//   for (let i = 0; i < ascending.length; i++) {
//     indexone.push(ascending[i][1]);
//   }
//   indexone.sort((a, b) => b - a);
//   const y = indexone[0];

//   return x * y;
// }
// console.log(
//   solution([
//     [60, 50],
//     [30, 70],
//     [60, 30],
//     [80, 40],
//   ])
// );

//45. 시저암호
// function solution(s, n) {
//   var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var lower = "abcdefghijklmnopqrstuvwxyz";
//   //각각의 알파벳이 lower인지 upper인지 판단 후에 같은것을 찾아서
//   for (let i = 0; i < s.length; i++) {
//     const text = s[i];
//     if (text == " ") {
//       answer += " ";
//       continue;
//     }
//     var textArr = upper.inclu;
//   }

//   //각 자리수가 몇번째 자리수인지 구해서 뒤로 밀어
//   var answer = "";
//   return answer;
// }
// console.log(solution("AB", 1));

//46. 숫자열과 문자열
// function solution(s) {
//   var answer = s;
//   let alpha = [
//     "zero",
//     "one",
//     "two",
//     "three",
//     "four",
//     "five",
//     "six",
//     "seven",
//     "eight",
//     "nine",
//   ];
//   for (let i = 0; i < alpha.length; i++) {
//     //   const a = s.includes(alpha[i]);
//     // const b = s.filter((a) => alpha.includes(a));
//     // console.log(b);
//     let arr = answer.split(alpha[i]);
//     console.log(arr);
//     answer = arr.join(i);
//   }
//   // console.log(answer);
//   // return answer;
// }
// console.log(solution("one4seveneight"));

// function solution(s) {
//   // var answer = 0;
//   let number = {
//     zero: 0,
//     one: 1,
//     two: 2,
//     three: 3,
//     four: 4,
//     five: 5,
//     six: 6,
//     seven: 7,
//     eight: 8,
//     nine: 9,
//     ten: 10,
//   };

//   const pattern = new RegExp(Object.keys(number).join("|"), "gi");
//   console.log(pattern);
//   let answer = s.replace(pattern, (m) => number[m]);
//   console.log(answer);
//   return +answer;
// }
// console.log(solution("one4seveneight"));

//47. 문자열 내 마음대로 정렬하기
// function solution(strings, n) {
//   var answer = [];
//   //각 문자열의 n-1인덱스 구해서 오름차순으로 정렬하기
// strings.forEach((element,i) => {
//   element.
// });

//   return answer;
// }
// console.log(solution(["sun", "bed", "car"], 1));

//25. 나누어 떨어지는 숫자
//array의 각 element 중 divisor로 나누어 떨어지는 값을 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
// divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.

// function solution(arr, divisor) {
//   // let answer = arr.filter((a) => a % divisor === 0);
//   // var answer = [];
//   var answer = arr.filter((a) => a % divisor === 0);
//   // for (let i = 0; i < arr.length; i++) {
//   //   if (arr[i] % divisor === 0) {
//   //     answer.push(arr[i]);
//   //   }
//   // }
//   return answer[0] ? answer.sort((a, b) => a - b) : [-1];
// }

// console.log(solution([3, 2, 6], 10));

//음양더하기
// 어떤 정수들이 있습니다. 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs가 매개변수로 주어집니다. 실제 정수들의 합을 구하여 return 하도록 solution 함수를 완성해주세요.
// function solution(absolutes, signs) {
//   signs.forEach((element, i) => {
//     if (element === false) {
//       return (absolutes[i] = absolutes[i] - absolutes[i] * 2);
//     }
//   });
//   return absolutes.reduce((curr, acc) => curr + acc);
// }
// console.log(solution([4, 7, 12], [true, false, true]));

//핸드폰 번호 가리기
//프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
// 전화번호가 문자열 phone_number로 주어졌을 때, 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.

// function solution(phone_number) {
//   return phone_number.split("").fill("*", 0, -4).join("");
// }
// console.log(solution("01033334444"));

//없는 숫자 더하기
//0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 solution 함수를 완성해주세요.
//0-9까지 배열이 있는데, for가 number를 돌면서 동일한게 있으면 splice로 제거한다. 그리고 남는거를 더해
// function solution(numbers) {
//   const answer = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//     .filter((a) => !numbers.includes(a))
//     .reduce((acc, curr) => acc + curr);
//   return answer;
// }
// console.log(solution([1, 2, 3, 4, 6, 7, 8, 0]));

//제일 작은 수 제거하기
//정수를 저장한 배열, arr 에서 가장 작은 수를 제거한 배열을 리턴하는 함수, solution을 완성해주세요. 단, 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴하세요. 예를들어 arr이 [4,3,2,1]인 경우는 [4,3,2]를 리턴 하고, [10]면 [-1]을 리턴 합니다.
// function solution(arr) {
//   const newArr = [...arr].sort((a, b) => a - b);
//   if (newArr.length !== 1) {
//     return arr.filter((a) => newArr[0] !== a);
//   } else {
//     return -1;
//   }
// }
// console.log(solution([4, 3, 2, 1]));

//가운데 글자 가져오기ㅣ
//단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.
// function solution(s) {
//   if (s.length % 2 === 0) {
//     return [s[s.length / 2 - 1], s[s.length / 2]].join("");
//   } else {
//     return s[Math.floor(s.length / 2)];
//   }
// }
// console.log(solution("abcde"));

//수박수박수박
//길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴하는 함수, solution을 완성하세요. 예를들어 n이 4이면 "수박수박"을 리턴하고 3이라면 "수박수"를 리턴하면 됩니다.
// function solution(n) {
//   const arr = new Array(10000).fill("수박").join("");
//   return arr.slice(0, n);
// }
// console.log(solution(3));

//내적
//길이가 같은 두 1차원 정수 배열 a, b가 매개변수로 주어집니다. a와 b의 내적을 return 하도록 solution 함수를 완성해주세요.
// 이때, a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 입니다. (n은 a, b의 길이)

// function solution(a, b) {
//   let answer = [];
//   a.forEach((element, i) => {
//     answer.push(a[i] * b[i]);
//   });
//   return answer.reduce((acc, curr) => acc + curr);
// }
// console.log(solution([1, 2, 3, 4], [-3, -1, 0, 2]));

//약수의 개수와 덧셈
//두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서, 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.
//right에서 left뺀 갯수 i가 n이 될때까지 while로 right에서 차감
//for문을 돌려서 각각의 아이 추출 -> while문으로 약수 구하기
// function solution(left, right) {
//   const num = right - left + 1;
//   i = 0;
//   const numArr = []; //[ 16, 15, 14, 13 ]
//   while (i <= num - 1) {
//     numArr.push(right - i);
//     i++;
//   }

//   let countArr = []; //[ 5, 4, 4, 2 ]
//   for (let k = 0; k < numArr.length; k++) {
//     let count = 0;
//     let j = 0;
//     while (j <= numArr[k]) {
//       if (numArr[k] % j === 0) count++;
//       j++;
//     }
//     countArr.push(count);
//   }

//   countArr.forEach((element, i) => {
//     if (countArr[i] % 2 !== 0) {
//       numArr[i] = -1 * numArr[i];
//     }
//   });
//   return numArr.reduce((acc, curr) => acc + curr);
// }
// console.log(solution(13, 17));

//문자열 내림차순으로 배치하기
//문자열 s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴하는 함수, solution을 완성해주세요.
// s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주합니다.
// function solution(s) {
//   return s
//     .split("")
//     .sort((a, b) => {
//       if (a > b) return -1;
//       if (a < b) return 1;
//       return 0;
//     })
//     .join("");
// }
// console.log(solution("Zbcdefg"));

//부족한 금액 계산하기
//this new ride at an amusement park is very popular and runs nonstop. The original fee of this ride is price, but it is determined that when using the ride for the Nth time, the fee will increase as N times of the original fee. That is, if the original fee is 100, it will be 200 for the second time, and 300 for the third time.
// Write a function solution to return the insufficient money when the ride is used count times.
// However, return 0 when the owed amount is sufficient.
// function solution(price, money, count) {
//   var answer = -1;
//   const feeArr = [];
//   i = 1;
//   while (i <= count) {
//     feeArr.push(price * i);
//     i++;
//   }

//   const total = feeArr.reduce((acc, curr) => acc + curr) - money;
//   return total > 0 ? total : 0;
// }
// console.log(solution(3, 20, 4));

//문자열 다루기 기본
//
// 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
// function solution(s) {
//   let firstCondition = false;
//   if (s.length === 4 || s.length === 6) {
//     firstCondition = true;
//   }

//   let secondCondition = false;
//   if (s.match(/^[0-9]*$/)) {
//     secondCondition = true;
//   }
//   return firstCondition && secondCondition ? true : false;
// }
// console.log(solution("12323"));

//행렬의 뺄샘
//행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 됩니다. 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 반환하는 함수, solution을 완성해주세요.
// function solution(arr1, arr2) {
//   const arr1Flat = arr1.flat();
//   const arr2Flat = arr2.flat();
//   const newArr = [];
//   arr1Flat.forEach((element, i) => {
//     newArr.push(arr1Flat[i] + arr2Flat[i]);
//   });

//   console.log(newArr);
//   const chunkSize = newArr.length / arr1.length;
//   const result = [];
//   for (let i = 0; i < newArr.length; i += chunkSize) {
//     result.push(newArr.slice(0 + i, chunkSize + i));
//   }
//   return result;
// }
// console.log(
//   solution(
//     [
//       [1, 2, 3, 3],
//       [2, 3, 4, 4],
//       [1, 2, 3, 4],
//     ],
//     [
//       [3, 4, 5, 3],
//       [5, 6, 7, 3],
//       [1, 4, 2, 2],
//     ]
//   )
// );

//직사각형 별찍기
// function solution(n, m) {
//   const arr = new Array(n).fill("*").join(",");
//   const finalArr = [];
//   for (let i = 0; i < m; i++) {
//     finalArr.push(arr);
//   }
//   return finalArr;
// }
// console.log(solution(5, 3));

// process.stdin.setEncoding("utf8");
// process.stdin.on("data", (data) => {
//   const n = data.split(" ");
//   const a = Number(n[0]),
//     b = Number(n[1]);

//   for (let i = 0; i < b; i++) {
//     // b = 3 3번 반복
//     let str = ""; // * 저장할 변수 지정
//     for (let j = 0; j < a; j++) {
//       // a = 5, 5번 반복
//       str = str + "*"; // 5번 출력
//     }
//     console.log(str); // 출력
//   }
// });

//최대공약수와 최소공배수
//두 수를 입력받아 두 수의 최대공약수와 최소공배수를 반환하는 함수, solution을 완성해 보세요. 배열의 맨 앞에 최대공약수, 그다음 최소공배수를 넣어 반환하면 됩니다. 예를 들어 두 수 3, 12의 최대공약수는 3, 최소공배수는 12이므로 solution(3, 12)는 [3, 12]를 반환해야 합니다.

// function solution(n, m) {
//   const greatestCommonDivisor = (n, m) => {
//     i = 1;
//     const NmaxArr = [];
//     while (i <= n) {
//       if (n % i === 0) {
//         NmaxArr.push(i);
//       }
//       i++;
//     }

//     j = 1;
//     const MmaxArr = [];
//     while (j <= m) {
//       if (m % j === 0) {
//         MmaxArr.push(j);
//       }
//       j++;
//     }
//     const result = MmaxArr.filter((a) => NmaxArr.includes(a));
//     return result.reverse()[0];
//   };

//   const minimumCommonDivisor = (n, m) => {
//     i = 1;
//     const MminArr = [];
//     while (i <= 1000000) {
//       if (i % m === 0) {
//         MminArr.push(i);
//       }
//       i++;
//     }

//     j = 1;
//     var Nmin = 0;
//     while (j <= 1000000) {
//       if (j % n === 0) {
//         if (MminArr.includes(j)) var Nmin = j;
//       }
//       if (Nmin) break;
//       j++;
//     }

//     return Nmin;
//   };

//   return [greatestCommonDivisor(n, m), minimumCommonDivisor(n, m)];
// }
// console.log(solution(3, 12));

//3진법 뒤집기
//자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.
// function solution(n) {
//   var answer = 0;
//   const ternary = n.toString(3).split("").reverse().join("");
//   //parseInt는 문자열 숫자의 진법을 바꿔준다. toString은 숫자를 문자열 진법으로 바꿔준다.
//   console.log(ternary);
//   return parseInt(ternary, 3);
//   //parseint는 문자형 숫자를 10진법으로 바꿔준다. 두번째 칸에는 기존 진법이 들어가야 한다.
// }
// console.log(solution(45));

//이상한 문자 만들기
//문자열 s는 한 개 이상의 단어로 구성되어 있습니다. 각 단어는 하나 이상의 공백문자로 구분되어 있습니다. 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// function solution(s) {
//   let arr = s.split(" ");
//   console.log(arr);
//   for (let i = 0; i < arr.length; i++) {
//     console.log(count);
//     if (arr[i].length === 0) {
//       arr.splice(i, 1);
//     }
//   }
//   console.log(arr);

//   const newArr = [];
//   arr.forEach((element, i) => {
//     newArr.push(element);
//     if (i !== arr.length - 1) {
//       newArr.push(" ");
//     }
//   });
//   var answer = [...newArr].join("");
//   answer = answer[0].toUpperCase() + answer.substring(1);

//   let modified = answer.split("").map((element, i) => {
//     return i % 2 === 0 ? element.toUpperCase() : element;
//   });

//   return modified.join("");
// }
// console.log(solution("try    hello world"));

// function solution(s) {
//   return s
//     .split(" ")
//     .map((word) => {
//       return word
//         .split("")
//         .map((char, index) =>
//           index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
//         )
//         .join("");
//     })
//     .join(" ");
// }
// console.log(solution("try    hello world"));

// function Asolution(s) {
//   return s
//     .split(" ")
//     .map((word) =>
//       word
//         .split("")
//         .map((char, index) =>
//           index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
//         )
//         .join("")
//     )
//     .join(" ");
// }

// console.log(solution("try    hello world"));

//삼총사
//한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.

// 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 solution 함수를 완성하세요.

// function solution(number) {
//   let arr = [];

//   for (let i = 0; i < number.length; i++) {
//     arr.push(number[i]);
//     let newNum = number.slice(i + 1);
//     // console.log("1", newNum);

//     for (let j = 0; j < newNum.length - 1; j++) {
//       arr.push(newNum[j]);
//       let newNewNum = newNum.slice(j + 1);
//       // console.log("2", newNewNum);

//       for (let k = 0; k < newNewNum.length; k++) {
//         arr.push(newNewNum[k]);
//         // arr = number;
//         console.log("arr", arr);
//       }
//     }
//   }
// }
// console.log(solution([-2, 3, 0, 2, -5]));

// function solution(number) {
//   let count = 0;

//   for (let i = 0; i < number.length; i++) {
//     let newNum = number.slice(i + 1);
//     for (let k = 0; k < newNum.length; k++) {
//       let newnewNum = number.slice(k);
//       for (let j = 0; j < newnewNum.length; j++) {
//         // if (
//         //   number[i] !== number[k] &&
//         //   number[i] !== number[j] &&
//         //   number[k] !== number[j]
//         // ) {
//         if (number[i] + number[k] + number[j] === 0) count++;
//         console.log(
//           number[i],
//           number[k],
//           number[j],
//           number[i] + number[k] + number[j]
//         );
//         // }
//       }
//     }
//   }
//   return count;
// }
// console.log(solution([-2, 3, 0, 2, -5]));

//크기가 작은 부분
//숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서, 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return하는 함수 solution을 완성하세요.

// 예를 들어, t="3141592"이고 p="271" 인 경우, t의 길이가 3인 부분 문자열은 314, 141, 415, 159, 592입니다. 이 문자열이 나타내는 수 중 271보다 작거나 같은 수는 141, 159 2개 입니다.

// function solution(t, p) {
//   const arr = [];
//   for (let i = 0; i < t.length - p.length + 1; i++) {
//     k = i;
//     const num = [];
//     while (k <= i + p.length - 1) {
//       num.push(t[k]);
//       k++;
//     }
//     arr.push(parseInt(num.join("")));
//   }
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= parseInt(p)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(solution("3141592", "271"));

//최소직사각형
// function solution(sizes) {
//   sizes.map((item) => {
//     return item.sort((a, b) => b - a);
//   });
//   const zero = [];
//   const first = [];
//   sizes.forEach((element, i) => {
//     if (element[0]) zero.push(element[0]);
//     if (element[1]) first.push(element[1]);
//   });
//   return zero.sort((a, b) => b - a)[0] * first.sort((a, b) => b - a)[0];
// }
// console.log(
//   solution([
//     [60, 50],
//     [30, 70],
//     [60, 30],
//     [80, 40],
//   ])
// );

//시저암호
// function solution(s, n) {
//   const upper = [
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//   ];

//   let arr = s.split("");
//   let characterArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === " ") {
//       characterArr = [...arr].filter((a) => a !== " ");
//     }
//   }

//   const spaceFunc = () => {
//     const newArr = [];
//     arr.forEach((element, i) => {
//       newArr.push(element);
//       if (i !== arr.length - 1) {
//         newArr.push(" ");
//       }
//     });

//     console.log(newArr);
//     return newArr;
//     j;
//   };

//   let result = [];
//   characterArr.forEach((element, i) => {
//     let location = upper.indexOf(characterArr[i].toUpperCase());

//     var find = "";
//     if (characterArr[i] === characterArr[i].toLowerCase()) {
//       let next = location + n;
//       if (location === 24) next = 0 + n - 1;
//       var find = upper[next].toLowerCase();
//     } else {
//       let next = location + n;
//       if (location === 24) next = 0;
//       var find = upper[next];
//     }

//     if (arr[i] === " ") spaceFunc();
//     result.push(find);
//   });

//   return result.join("");
// }
// console.log(solution("a B z", 4));

//삼총사
//시저암호

// function solution(s, n) {
//   var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var lower = "abcdefghijklmnopqrstuvwxyz";
//   var answer = "";

//   for (var i = 0; i < s.length; i++) {
//     var text = s[i];
//     if (text == " ") {
//       answer += " ";
//       continue;
//     }
//     var textArr = upper.includes(text) ? upper : lower;
//     var index = textArr.indexOf(text) + n;
//     if (index >= textArr.length) index -= textArr.length;
//     answer += textArr[index];
//   }
//   return answer;
// }

// function solution(s, n) {
//   var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var lower = "abcdefghijklmnopqrstuvwxyz";
//   var answer = "";

//   for (let i = 0; i < s.length; i++) {
//     var text = s[i];
//     if (text == " ") {
//       answer += " ";
//       continue;
//     }
//     var textArr = upper.includes(text) ? upper : lower;
//     console.log(textArr);
//     var index = textArr.indexOf(text) + n;
//     if (index >= textArr.length) index -= textArr.length;
//     answer += textArr[index];
//     console.log(index);
//     console.log(answer);
//   }
//   console.log(answer);
// }
// console.log(solution("a B z", 4));

//숫자 문자열과 영단어
// function solution(s) {
//   var match = {
//     0: "zero",
//     1: "one",
//     2: "two",
//     3: "three",
//     4: "four",
//     5: "five",
//     6: "six",
//     7: "seven",
//     8: "eight",
//     9: "nine",
//   };
//   var number = Object.keys(match);
//   var name = Object.values(match);
//   answer = s;

//   for (let i = 0; i < name.length; i++) {
//     // console.log(s[i]);
//     var foundArr = answer.split(name[i]);
//     answer = foundArr.join(i);
//     console.log(foundArr);
//   }
//   console.log(answer);
// }
// console.log(solution("one4seveneight"));

// function solution(s) {
//   // var newS = s;
//   while (isNaN(+s)) {
//     s = s.replace("zero", 0);
//     s = s.replace("one", 1);
//     s = s.replace("two", 2);
//     s = s.replace("three", 3);
//     s = s.replace("four", 4);
//     s = s.replace("five", 5);
//     s = s.replace("six", 6);
//     s = s.replace("seven", 7);
//     s = s.replace("eight", 8);
//     s = s.replace("nine", 9);
//   }
//   console.log(+s);
// }

// console.log(solution("one4seveneight"));

// //문자열 내 마음대로 정렬하기
// function solution(strings, n) {
//   let arr = [];
//   //중복 객체 여부 확인
//   const hasDuplicate = (arr) => {
//     const newArr = new Set(arr);
//     return newArr.length !== arr.length; //true ->중복 없음
//   };

//   //for를 돌면 서 각 단어의 n번째 파악
//   for (let i = 0; i < strings.length; i++) {
//     let word = strings[i];
//     arr.push(word[n - 1]);
// }
//   //만약 같은 알파벳이 있다면
//   //그 안에서 사전순으로 정렬

//   if (hasDuplicate(arr)) arr.sort((a, b) => a.localeCompare(b));
//   console.log(arr);

//   //각 아이템의 n-1의 인덱스가 arr의 각 인덱스와 같다면 replace
//   // for (let i = 0; i < strings.length; i++) {
//   //   for (let k = 0; k < arr.length; k++) {
//   //     if (strings[i][n - 1] === arr[k]) {
//   //     }
//   //   }
//   // }

// if()

//   console.log(arr);
//   //만약 같은 알파벳이 없다면

//   //그 n들끼리 오름차순 정렬

//   //대치
// }
// console.log(solution(["sbn", "bed", "car"], 1));

//문자열 내 마음대로 정렬하기
// function solution(strings, n) {
//   //sort로 사용할 때 a,b자체가 for문을 돌린 것과 같음. (하나하나 순회함))
//   strings.sort((a, b) =>
//     a[n] !== b[n] ? a[n].localeCompare(b[n]) : a.localeCompare(b)
//   );

//   return strings;
// }
// console.log(solution(["sun", "bed", "car"], 1));

// strings.sort((a, b) => a[n].localeCompare(b[n]) !== 0 ? a[n].localeCompare(b[n]) : a.localeCompare(b));

//k번째 수
// function solution(array, commands) {
//   //for 문으로 commands를 돌려서
//   //각각의 item을 slice로 자르고
//   //sort하고
//   //마지막꺼를 새 배열에 담고

//   var answer = [];
//   for (let i = 0; i < commands.length; i++) {
//     var startI = commands[i][0] - 1;
//     var endsI = commands[i][1];
//     var pickI = commands[i][2] - 1;

//     var slicedArr = array.slice(startI, endsI).sort((a, b) => a - b);
//     answer.push(slicedArr[pickI]);
//   }
//   return answer;
// }
// console.log(
//   solution(
//     [1, 5, 2, 6, 3, 7, 4],
//     [
//       [2, 5, 3],
//       [4, 4, 1],
//       [1, 7, 3],
//     ]
//   )
// );

//두 개 뽑아서 더하기
// function solution(numbers) {
//   var result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let k = i + 1; k < numbers.length; k++) {
//       var num = numbers[i] + numbers[k];
//       result.push(num);
//     }
//   }
//   result.sort((a, b) => a - b);
//   var finalArr = [];
//   for (let i = 0; i < result.length; i++) {
//     if (!finalArr.includes(result[i])) {
//       finalArr.push(result[i]);
//     }
//   }
//   return finalArr;
// }
// console.log(solution([5, 0, 2, 7]));

//가장 가까운 같은 글자
//각각 순회하면서
//처음나오면 -1
//한칸 앞에 나왔으면 1
//두칸 앞에 나왔으면 2 .. n => findLast()
// function solution(s) {
//   let arr = [];
//   let answer = [];
//   let sArr = s.split("");
//   for (let i = 0; i < sArr.length; i++) {
//     if (arr.length !== 0 && !arr.includes(sArr[i])) {
//       answer.push(-1);
//     }
//     if (arr.length !== 0 && arr.includes(sArr[i])) {
//       let num = arr.lastIndexOf(sArr[i]);
//       // console.log("num", num);

//       let exactNum = arr.length - num; //-1
//       // console.log("exactNum", exactNum);
//       answer.push(exactNum);
//     }
//     arr.push(sArr[i]);
//     if (i === 0) {
//       answer.push(-1);
//     }
//   }
//   return answer;
// }
// console.log(solution("banana"));

//푸드파이터대회
// function solution(food) {
//   //각 수가 홀수인지 짝수인지 확인
//   //만약 i가 홀수라면 -1해서 반나누기
//   //짝수라면 그냥 반나누기
//   //반나눠서 담을 때 i를 새로운 배열에 [i]만큼 담기 - 근데 양 옆에서 담아야 함... (앞 unshift, push)

//   var foodTable = [0];
//   for (let i = food.length; i > 0; i--) {
//     if (food[i] % 2 === 0) {
//       let k = 1;
//       while (k <= food[i] / 2) {
//         foodTable.unshift(i);
//         foodTable.push(i);
//         k++;
//       }
//     } else {
//       let k = 1;
//       while (k <= Math.floor(food[i] / 2)) {
//         foodTable.unshift(i);
//         foodTable.push(i);
//         k++;
//       }
//     }
//     ///홀수인 경우
//   }
//   return foodTable.join("");
// }
// console.log(solution([1, 3, 4, 6]));

//콜라문제
// function solution(a, b, n) {
//   //while n/2가 1이 될 떄까지

//   // 20(n)  2(a)   10(n/2)
//   // 10(n)  2(a)   5(n/2)  => 홀수
//   // 4(n-1)   2(a)   2(n-1  /2)  -1
//   // 2(n)   2(a)   1(n/a)
//   // 2(n+1)   2(a)   1(n+1/2)  +1

//   let result = 0;
//   while (n >= a) {
//     result += Math.floor(n / a) * b;
//     n = Math.floor(n / a) * b + (n % a);
//   }
//   return result;
// }
// console.log(solution(2, 1, 20));

// ////

//명예의 전당
//제일 처음에 k개를 뽑는다.
//k개를 제외한 score를 한개한개 돌면서
//한 번 더 arr를 돌면서 얘들보다 현재 i가 더 작은지 확인,
//크다면 젤 작은걸 대체
// function solution(k, score) {
//   let prizeArr = [];
//   let answer = [];

//   let a = 0;
//   while (a < k) {
//     prizeArr.push(score[a]);
//     prizeArr.sort((a, b) => a - b);
//     answer.push(prizeArr[0]);
//     // console.log(answer);
//     a++;
//   }
//   // console.log(prizeArr);

//   for (let i = k; i < score.length + 1; i++) {
//     prizeArr.sort((a, b) => a - b);

//     answer.push(prizeArr[0]);

//     console.log("prizeArr", i, prizeArr);
//     // console.log("answer", answer);

//     for (let j = 0; j < prizeArr.length; j++) {
//       if (score[i] > prizeArr[j] && !prizeArr.includes(score[i])) {
//         prizeArr[j] = score[i];
//         continue;
//       }
//     }

//     if (i === score.length) answer.push(prizeArr[0]);
//   }

//   // console.log(answer);
//   return answer;
// }
// console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));

// function solution(k, score) {
//   var prizeArr = [];
//   var answer = [];

//   for (let i = 0; i < score.length; i++) {
//     if (i >= k) {
//       if (prizeArr[0] < score[i]) {
//         prizeArr.sort((a, b) => a - b);
//         prizeArr[0] = score[i];
//       }
//       if (prizeArr[0] >= score[i]) {
//         prizeArr.sort((a, b) => a - b);
//       }
//     } else {
//       prizeArr.push(score[i]);
//     }
//     answer.push(prizeArr[0]);
//   }
//   return answer;
// }
// console.log(solution(3, [10, 100, 20, 150, 1, 100, 200]));

//2016
function solution(a, b) {
  var dayList = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  var monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  var daySum;

  if (a < 2) {
    daySum = b - 1;
  } else {
    daySum = monthArr.slice(0, a - 1).reduce((a, b) => a + b) + b - 1;
  }
  console.log(daySum % 7);
  return dayList[daySum % 7];
}

console.log(solution(5, 24));

//2016년은 금요일부터 시작한다.
//n+7 은 금요일이다. //
//a월이 30,31,29중에 뭔지 안다  => month의 i는 n-1이다.
//-> month로 끊어서 1로 리셋시킨다.
//a월이 무슨 요일에 시작하는지 안다. =>일, week를 1:1대응시킨다.

//카드뭉치
