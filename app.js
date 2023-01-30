// =============================================================================
// javascript로 css 스타일 변경
// =============================================================================
// const h1 = document.getElementById("title");

// =============================================================================
// className로 스타일 변경 하는 방법
// =============================================================================
// function handleTitleClick() {
//   h1.classList.toggle("clicked");
// }
// h1.addEventListener("click", handleTitleClick);

// =============================================================================
// javascript로 스타일 변경 하는 방법
// =============================================================================

/*function handleTitleClick() {
  // currentColor는 getter로써 최근 color값을 복사한다. 그렇기에 const 로 선언함 
  const currentColor = h1.style.color;
  // newColor는 setter로써, 변수에 대입된 색상값을 h1.style.color에 최종적으로 할당한다.
  // 값이 변경 될 수 있기 때문에 let으로 선언
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}
h1.addEventListener("click", handleTitleClick);*/

// =============================================================================
// javascript-input
// =============================================================================
// const loginForm = document.querySelector("#login-form");
// const loginInput = document.querySelector("#login-form input");
// const greeting = document.querySelector("#greeting");

// const HIDDEN_CLASSNAME = "hidden";
// const USERNAME_KEY = "username";

// function onLoginSubmit(event) {
//   //step1-화면 새로고침 방지
//   event.preventDefault();
//   //step2-form을 hidden 시킴
//   loginForm.classList.add(HIDDEN_CLASSNAME);
//   const username = loginInput.value
//   //step3-storage에 key는 'username'으로 저장, name은 input.value로 저장
//   localStorage.setItem(USERNAME_KEY, username);
//   //step4-
//   paintGreetings(username);
// }

// function paintGreetings(username) {
//   greeting.innerText = `Hello ${username}!`;
//   greeting.classList.remove(HIDDEN_CLASSNAME);
// }

// const savedUsername = localStorage.getItem(USERNAME_KEY);
// if (savedUsername === null) {
//   loginForm.classList.remove(HIDDEN_CLASSNAME);
//   loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//   paintGreetings(savedUsername);
// }

// =============================================================================
// javascript-casino
// =============================================================================

const casinoForm = document.querySelector("#casino-form")
const setNum = document.querySelector("h4 input")
const userNum = document.querySelector("#userNum")
const machineNum = document.querySelector("#machineNum")
const userInputNum = document.querySelector("#userInputNum")
const comNum = document.querySelector("#comNum")
const result = document.querySelector("#result")

function onPlay (event){
  event.preventDefault()
  userNum.innerText =`You chose: ${userInputNum.value},`
  machineNum.innerText =`the machine chose: ${comNum.value}`
}

function resultText (){
  if(userNum > comNum) {
    result.innerText("You won!")
  }else{
    result.innerText("You lost!")
  }
}

casinoForm.addEventListener("submit", onPlay)
