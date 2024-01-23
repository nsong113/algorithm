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
function solution(arr) {
  var answer = [];
  return answer;
}
console.log(solution([4, 3, 2, 1]));
