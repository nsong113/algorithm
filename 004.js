//1. 가장 많이 받은 선물
//https://school.programmers.co.kr/learn/courses/30/lessons/258712?language=javascript

//두 사람이 선물을 주고 받았다면, 두 사람 사이에 더 많은 선물을 준 사람이 다음 달에 선물을 하나 받음
//기록이 없거나, 같다면 -> 선물 지수가 더 큰 사람이 선물 지수가 더 작은 사람에게 선물을 하나 받음.
//선물지수: 이번 달까지 자신이 친구들에게 준 선물의 수 - 받은 산물의 수
//만약 선물 지수까지 같아면 다음 달에 선물을 주고 받지 않는다.

//friend:친구들의 이름
//gifts:이번 달까지 친구들이 주고 받은 선물 기록을 담은

// 알고 싶은 것: 선물을 가장 많이 받은 친구가 받을 선물의 수를 알고 싶음.

function solution(friends, gifts) {
  //프렌드 배열을 돌면서 누가 누구한테 주었는지 이중 배열로 만듬 [[a,b,c,d],[a,b,c,d],[a,b,c,d],[a,b,c,d]]
  //선물 지수 배열을 만듬. 이중 배열의 각 요소를 더해서 새로운 배열에 추가
  //이중 선물 배열을 A의 b가 더 큰지 B의 a가 더 큰지 비교해서 선물을 줄지 말지 결정해서, b가 더 크다면, 새로운 배열[0,0,0,0] b자리에 1을 더함.
  //[0,0,0,0]중에서 가장 큰 수를 그 값을 리턴함

  const giftSplitArr = gifts.map((gift, i) => {
    return gift.split(" ");
  });

  console.log(giftSplitArr);
  let giftArr = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  for (let i = 0; i < giftSplitArr.length; i++) {
    for (let k = 0; k < friends.length; k++) {
      if (giftSplitArr[i][0] === friends[k]) {
        for (let j = 0; j < friends.length; j++) {
          if (giftSplitArr[i][1] === friends[j]) {
            giftArr[k][j]++;
          }
        }
      }
    }

    console.log("giftArr", giftArr);
  }

  const newGiftArr = [];
  for (let i = 0; i < giftArr.length; i++) {
    for (let k = 0; k < giftArr[i].length; k++) {
      giftArr[i][k].map((item, i) => {});
    }
  }
}

console.log(
  solution(
    ["muzi", "ryan", "frodo", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "ryan muzi",
      "ryan muzi",
      "ryan muzi",
      "frodo muzi",
      "frodo ryan",
      "neo muzi",
    ]
  )
);
