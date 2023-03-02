const images = ["img-1.jpg", "img-2.jpg", "img-3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)]

// img를 가져오자
const bgImages = document.createElement("img") 

bgImages.src = `/img/${chosenImage}`

document.body.appendChild(bgImages)

