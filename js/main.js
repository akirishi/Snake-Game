let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
  x: 8 * box,
  y: 8 * box
}
let direction = "right"

function criarBG() {
  context.fillStyle = "lightgreen";
  context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarSnake() {
  for (i = 0; i < snake.length; i++) {
    context.fillStyle = "black";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
}

function start() {
  criarBG();
  criarSnake();

  let snakeX = snake[0].x;
  let snakeY = snake[0].y;

  if (direction == "right") snakeX += box;
  if (direction == "left") snakeX -= box;
  if (direction == "up") snakeY -= box;
  if (direction == "down") snakeY += box;

  snake.pop();

  letnewHead = {
    x: snakeX,
    y: snakeY
  }

  snake.unshift(newHead);
}

let jogo = setInterval(start, 100)