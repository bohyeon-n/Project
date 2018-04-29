// select 화면에서 선택하면 사진이 선택이 선택되고 어딘가로 저장된다. 

// 만약 p1을 클릭하면 p1을 배열에 저장한다. 
// 만약 p2를 클릭하면 p2를 배열에 저장한다. 
// 다음 두 개의 사진을 보여준다. 

const arr = ['/img/p0.jpeg','/img/p1.jpeg','/img/p2.jpeg','/img/p3.jpeg','/img/p4.jpeg','/img/p5.jpeg',
'/img/p6.jpeg','/img/p7.jpeg']
let index = arr.length-1
const p1El = document.querySelector('#p1')
const p2El = document.querySelector('#p2')

let i = 0;
 p1El.addEventListener('click', () => { 

 arr.splice(i,2,arr[i])
 document.getElementById("p1").src = arr[i+1];
 document.getElementById("p2").src = arr[i+2];
  i++
  if(arr[i]=== undefined){
    i = 0;
    document.getElementById('p1').src = arr[i];
    document.getElementById('p2').src = arr[i+1];
  }
  if(arr.length === 1){
    localStorage.setItem('result', arr[0])
    window.location.href = '/result.html'
  }
}) 
  p2El.addEventListener('click', () => {
  arr.splice(i,2,arr[i+1])
  document.getElementById("p1").src = arr[i+1];
  document.getElementById("p2").src = arr[i+2];
  i++
  if(arr[i+1]=== undefined){
    i = 0;
    document.getElementById('p1').src = arr[i];
    document.getElementById('p2').src = arr[i+1];
  }
  if(arr.length === 1){
    localStorage.setItem('result', arr[0])
    window.location.href = '/result.html'
  }
})




