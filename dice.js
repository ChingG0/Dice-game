const gameStartButton = document.querySelector(".play-btn")
const tigerPointPanel = document.querySelector(".tiger .point")
const bearPointPanel = document.querySelector(".bear .point")
const prizePanel = document.querySelector(".prize-panel")

gameStartButton.addEventListener("click", function() {
//兩人擲骰，6個亂數，從1開始
let tigerPoint = Math.floor(Math.random()*6)+1
let bearPoint = Math.floor(Math.random()*6)+1
  
  tigerPointPanel.innerText = tigerPoint
  bearPointPanel.innerText = bearPoint
  
//判斷勝負
  if (tigerPoint > bearPoint) {
    prizePanel.innerText = "虎哥贏了！"  
  } else if (tigerPoint < bearPoint) {
    prizePanel.innerText = "熊弟贏了！"
  } else {
    prizePanel.innerText = "平手！"
  }
})