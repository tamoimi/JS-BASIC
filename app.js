const h1 = document.getElementById("title");

// =============================================================================
// className로 스타일 변경 하는 방법
// =============================================================================
function handleTitleClick() {
  h1.classList.toggle("clicked");
}
h1.addEventListener("click", handleTitleClick);

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
const bodyColor = document.querySelector("body");

function handleWindowSize () {
  const WindowSize = window.innerWidth;
  if(WindowSize >= 700){
    bodyColor.style.backgroundColor = "blue"
  }else if(WindowSize < 700 && WindowSize > 400) {
    bodyColor.style.backgroundColor = "orange"
  }else {
    bodyColor.style.backgroundColor = "yellow"
  }
}
window.addEventListener("resize", handleWindowSize)