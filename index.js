const pong = document.querySelector("#pong");
const ctx = pong.getcontext("2d");
const score = document.querySelector("#score");
const resetbtn = document.querySelector("#resetbtn");

const gameWidth = field.width;
const gameHeight = field.height;
const boardbackground = "forestgreen";
const paddle1Color = "black";
const paddle2Color = "white";
const paddleBorder = "yellow";
const ballColor = "red";
const ballborderColor = "black";
const ballRadius = 12.5;
const paddleSpeed =50;

let  intervalID;
let ballSpeed = 1;
let ballX = gameWidth/2;
let ballY = gameHeight/2;
let ballXDirection = 0;
let ballYDirection = 0;
let player1Score = 0;
let player2Score = 0;

let paddle1 = {
    width: 24,
    height: 100,
    x: 0,
    y: 0
}
let paddle2 = {
    width: 24,
    height: 100,
    x: gameWidth -24,
    y: gameHeight - 100
}
window.addEventListener("keydown", changeDirectio);
resetbtn 


