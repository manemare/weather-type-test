/*
ENFJ, 0
ENTJ, 1
ENFP, 2
ENTP, 3
ESFP, 4
ESFJ, 5
ESTP, 6
ESTJ, 7
INFP, 8
INFJ, 9
INTP, 10
ISTP, 11
ISFP, 12
ISFJ, 13
ISTJ, 14
INTJ, 15
*/

const qnaList = [
  {
    q: '1. 여름을 맞아 여행을 떠나기로 했다!',
    a: [
      { answer: '계획을 짜고 챙겨야 할 준비물을 생각해 놓는다', type: [0, 1, 5, 7, 9, 13, 14, 15] },
      { answer: '가서 놀 생각에 마냥 들떠있다', type: [4, 6, 11, 12] },
      { answer: '머릿속으로 시뮬레이션을 돌려보며 상상에 빠진다', type: [2, 3, 8, 10] },
    ]
  },
  {
    q: '2. 여행을 마치고 집에 가는 길, 갑자기 비가 쏟아지기 시작했다!',
    a: [
      { answer: '우산이 있는 친구에게 집까지 데려다달라고 말한다', type: [0, 1, 2, 3, 4, 5, 6, 7] },
      { answer: '집에 데리러 오라고 연락한다', type: [10, 11, 14, 15] },
      { answer: '옆에 있는 슈퍼에 들려 우산을 하나 산다', type: [8, 9, 12, 13] },
    ]
  },
  {
    q: '3. 인스타그램 스토리에 주로 올리는 건',
    a: [
      { answer: '24시간 생중계형 스토리', type: [0, 1, 2, 3, 4, 5, 6, 7] },
      { answer: '그냥 일상을 올린다.', type: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15] },
      { answer: '이거 웃기지?', type: [8, 9, 10, 12, 13] },
      { answer: '친구들이 태그할때만 가끔 올린다.', type: [8, 9, 10, 11, 12, 13, 14, 15] },
    ]
  },
  {
    q: '4. 주말 내내 집에만 있었다. 이때 드는 생각은',
    a: [
      { answer: '나가고 싶다. 주말에 집에만 있는 건 시간 낭비야!', type: [0, 1, 2, 3, 4, 5, 6, 7] },
      { answer: '역시 주말엔 집에서 쉬어야지. 체력 충전 완료!', type: [8, 9, 10, 11, 12, 13, 14, 15] },
      { answer: '집에서도 계획대로 알차게 지냈으니 만족해!', type: [0, 1, 5, 7, 9, 13, 14, 15] },
    ]
  },
  {
    q: '5. 서술형 힌트 중 전혀 이해가 가지 않는 부분이 있다 (예시: 병아리는 멍멍)',
    a: [
      { answer: '시험에 나올 것 같으니 일단 외우자', type: [4, 5, 6, 7, 11, 12, 13, 14] },
      { answer: '이해가 가야 외우지! 이해가 될 때까지 본다', type: [0, 1, 2, 3, 8, 9, 10, 15]},
      { answer: '당장 친구에게 물어본다', type: [0, 1, 2, 3, 4, 5, 6, 7] },
    ]
  },

  {
    q: '6. 새벽 3시, 전화벨 소리에 잠이 깼다. 친구가 헤어졌다고 울면서 전화를 걸었다.',
    a: [
      { answer: '얼마나 속상하면 이 시간에 전화를 했겠어. 이해하고 위로해준다.', type: [0, 2, 4, 5, 8, 9, 12, 13] },
      { answer: '짜증은 좀 나지만 위로해준다.', type: [6, 7, 11, 14] },
      { answer: '아무리 그래도 이 시간에 전화를? 화가 난다.', type: [1, 3, 6, 7, 10, 11, 14, 15] },
      { answer: '내일 다시 전화하자며 끊는다.', type: [0, 2, 5, 8, 9, 12, 13, 14] },
    ]
  },
  {
    q: '7. 새로운 사람들을 사귈 때',
    a: [
      { answer: '어쩌다 보니 무리에 껴있다', type: [1, 4, 5, 6, 7] },
      { answer: '안녕? 너 이름이 뭐니?', type: [0, 2, 3, 9, 13] },
      { answer: '간택당할 때까지 기다린다', type: [8, 10, 11, 12, 14, 15] },
    ]
  },
  {
    q: '8. 공허함이 느껴질 땐',
    a: [
      { answer: '마시고 먹고! 시끄럽게 푼다', type: [3, 4, 5, 7, 6, 11] },
      { answer: '친한 사람에게 속내를 털어놓는다', type: [0, 1, 2, 3, 12, 13, 14] },
      { answer: '끝없는... 심연 속으로...', type: [0, 5, 8, 9, 10, 15] },
      { answer: '별 생각 안한다.', type: [11, 14] },
    ]
  },
  {
    q: '9. 중요한 면접 직전 드는 생각은',
    a: [
      { answer: '되면 좋고 안 되면 말고!', type: [3, 4, 6] },
      { answer: '여기서 떨어지면 뭐 하고 살아야 할까...', type: [0, 2, 5, 8, 12, 13] },
      { answer: '날 뽑지 않으면 너네가 손해다.', type: [1, 7, 9, 10, 11, 14, 15] },
    ]
  },
  {
    q: '10. 나와 가장 잘 맞는 연인은',
    a: [
      { answer: '항상 서로를 위해주며 정신적 대화가 통하는 연인', type: [0, 2, 4, 5, 8, 9, 12, 13] },
      { answer: '현실을 바라보며 서로 챙겨주는 연인', type: [1, 6, 7, 11, 13, 14] },
      { answer: '관심 있는 주제로 3시간 토론이 가능한 연인', type: [3, 10, 11, 15] },
    ]
  },
  {
    q: '11. 나의 이상형은',
    a: [
      { answer: '배울 점이 많고 존경할만한 멋있는 사람', type: [1, 7, 10, 11, 14, 15] },
      { answer: '나를 지지해 줄 믿음직하고 상냥한 사람', type: [0, 2, 5, 8, 9, 12, 13] },
      { answer: '하는 말마다 웃기고 정감 가는 사람', type: [3, 4, 6] },
    ]
  },
  {
    q: '12. 인생에서 가장 중요한 것은',
    a: [
      { answer: '재미', type: [2, 3, 4, 5, 6, 11] },
      { answer: '의미', type: [0, 1, 8, 9, 10, 12, 13, 15] },
      { answer: '질서', type: [7, 14] },
    ]
  }
]
