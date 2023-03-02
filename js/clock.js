/*const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours());
  const minutes = String(date.getMinutes());
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}
//getClock을 바로 호출 하고 - 1초 지연 x
getClock();
//getClock을 1초 마다 호출
setInterval(getClock, 1000);*/

//크리스마스 디데이
// const dDay = document.querySelector("#dDay");

// function getDDay() {
//   const date = new Date();
//   const christmas = new Date("2023-12-25");
//   const gap = christmas - date;

//   const day = Math.floor(gap / (1000 * 60 * 60 * 24));
//   const hours = String(Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
//   const min = String(Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
//   const sec = String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(2, "0");

//   dDay.innerText = `${day}d ${hours}h ${min}m ${sec}s `;
// }
// getDDay();
// setInterval(getDDay, 1000);

const button = document.querySelector("#button");

// function pushButton () {
//   setTimeout(()=> )
// }

//5 refresh


function pushButton() {
  window.event.key === 13;
}
button.addEventListener('keyup', event => pushButton)
setInterval(pushButton, 1000);
