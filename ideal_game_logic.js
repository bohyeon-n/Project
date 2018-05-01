// 배열을 섞는 함수
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

//두 배열을 바꿔주는 함수
function swap(arr1, arr2) {
  let temp = arr1;
  arr1 = arr2.slice();
  arr2 = temp.slice();
  return [arr1, arr2];
}

let arr = [
  "/img/p0.jpeg",
  "/img/p1.jpeg",
  "/img/p2.jpeg",
  "/img/p3.jpeg",
  "/img/p4.jpeg",
  "/img/p5.jpeg",
  "/img/p6.jpeg",
  "/img/p7.jpeg",
  "/img/p8.jpeg",
  "/img/p9.jpeg",
  "/img/p10.jpeg",
  "/img/p11.jpeg",
  "/img/p12.jpeg",
  "/img/p13.jpeg",
  "/img/p14.jpeg",
  "/img/photo15.jpeg"
];
let selectedArr = [];

arr = shuffle(arr);
//
const p1El = document.querySelector("#p1");
const p2El = document.querySelector("#p2");
const roundEl = document.querySelector(".round");
//라운드 설정
let round = arr.length / 2;
let current = 1;
let i = 0;
roundEl.textContent = `${current} / ${round}`;
document.getElementById("p1").src = arr[0];
document.getElementById("p2").src = arr[1];

// 첫 번째 사진이 선택됐을 때

p1El.addEventListener("click", () => {
  selectedArr.push(arr[i]);
  i += 2;
  document.getElementById("p1").src = arr[i];
  document.getElementById("p2").src = arr[i+1];
  current++;
  roundEl.textContent = `${current} / ${round}`;
  // 끝 두 개의 사진만 남았을 때 클릭한다면 클릭된 사진을 저장하고 라운드를 바꿔줘야 한다.
  if (i === arr.length) {
    // selectedArr.push(arr[i]);
    [arr, selectedArr] = swap(arr, selectedArr);
    selectedArr = [];
    i = 0;
    current = 1;
    round = round / 2;
    if(arr.length !== 1){
      roundEl.textContent = `${current} / ${round}`;
    }
    document.getElementById("p1").src = arr[i];
    document.getElementById("p2").src = arr[i + 1];
  }
  // 최종선택 
  if (arr.length === 1) {
    localStorage.setItem("result", arr);
    window.location.href = "/result.html";
  }
 
});
//두 번째 사진이 선택됐을 때
p2El.addEventListener("click", () => {
  selectedArr.push(arr[i+1]);
  i += 2;
  document.getElementById("p1").src = arr[i];
  document.getElementById("p2").src = arr[i+1];
  current++;


  // 끝 두 개의 사진만 남았을 때 클릭한다면 클릭된 사진을 저장하고 라운드를 바꿔줘야 한다.
  if (i === arr.length) {
    // selectedArr.push(arr[i]);
    [arr, selectedArr] = swap(arr, selectedArr);
    selectedArr = [];
    i = 0;
    current = 1;
    round = round / 2;
    roundEl.textContent = `${current} / ${round}`;
    document.getElementById("p1").src = arr[i];
    document.getElementById("p2").src = arr[i + 1];
  }
  // 최종선택 
  if (arr.length === 1) {
    localStorage.setItem("result", arr);
    window.location.href = "/result.html";
  }
  roundEl.textContent = `${current} / ${round}`;
});
