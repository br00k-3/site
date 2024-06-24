"use client";
import { useRef, useEffect } from "react";
import { Button } from "./ui/button";

export function Game() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let x = canvas.width / 2;
    let y = canvas.height - 30;
    let dx = 2;
    let dy = -2;
    let dys = 1;
    const ballRadius = 10;

    const paddleHeight = 10;
    const paddleWidth = 100;
    let paddleX = (canvas.width - paddleWidth) / 2;
    const color = "#06b6d4";

    let rightPressed = false;
    let leftPressed = false;
    let interval = 0;
    const brickRowCount = 3;
    const brickColumnCount = 5;
    const brickWidth = 75;
    const brickHeight = 20;
    const brickPadding = 10;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 30;
    const bricks = [];
    for (let c = 0; c < brickColumnCount; c++) {
        bricks[c] = [];
        for (let r = 0; r < brickRowCount; r++) {
          bricks[c][r] = { x: 0, y: 0, status: 1 };
        }
      }
    
    let score = 0;

    function drawBall() {
      ctx.beginPath();
      ctx.arc(x, y, 10, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
      if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
        dx = -dx;
      }
      if (y + dy < ballRadius) {
        dy = -dy * dys;
      } else if (y + dy > canvas.height - ballRadius) {
        if (x > paddleX && x < paddleX + paddleWidth) {
          dys += 0.1;
          dy = -dy * dys;
        } else {
          gameIsRunning = false;
          clearInterval(interval);
          window.location.reload();

        }
      }
    }

    function drawPaddle() {
      ctx.beginPath();
      ctx.rect(
        paddleX,
        canvas.height - paddleHeight,
        paddleWidth,
        paddleHeight
      );
      ctx.fillStyle = color;
      ctx.fill();
      ctx.closePath();
    }
    function drawBricks() {
        for (let c = 0; c < brickColumnCount; c++) {
          for (let r = 0; r < brickRowCount; r++) {
            if (bricks[c][r].status === 1) {
              const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
              const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
              bricks[c][r].x = brickX;
              bricks[c][r].y = brickY;
              ctx.beginPath();
              ctx.rect(brickX, brickY, brickWidth, brickHeight);
              ctx.fillStyle = color;
              ctx.fill();
              ctx.closePath();
            }
          }
        }
      }

      function collisionDetection() {
        for (let c = 0; c < brickColumnCount; c++) {
          for (let r = 0; r < brickRowCount; r++) {
            const b = bricks[c][r];
            if (b.status === 1) {
              if (
                x > b.x &&
                x < b.x + brickWidth &&
                y > b.y &&
                y < b.y + brickHeight
              ) {
                dy = -dy;
                b.status = 0;
                score++;
              }
            }
          }
        }
      }

    function drawScore() {
        ctx.font = "bold 12px sans-serif";
        ctx.fillStyle = color;
        ctx.textAlign = "left";
        ctx.fillText("Score: " + score, 8, 20);
    }

    function title() {
        ctx.font = "bold 48px sans-serif";
        ctx.fillStyle = color;
        ctx.textAlign = "center";
        ctx.fillText("Click to start" , canvas.width / 2 , canvas.height / 2);
    }
    title()

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBall();
      drawPaddle();
      drawBricks();
      collisionDetection();
      drawScore();
      x += dx;
      y += dy;
      if (rightPressed) {
        paddleX = Math.min(paddleX + 7, canvas.width - paddleWidth);
      } else if (leftPressed) {
        paddleX = Math.max(paddleX - 7, 0);
      }
    }

    document.addEventListener("keydown", keyDownHandler, false);
    document.addEventListener("keyup", keyUpHandler, false);
    function keyDownHandler(e) {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = true;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = true;
      }
    }

    function keyUpHandler(e) {
      if (e.key === "Right" || e.key === "ArrowRight") {
        rightPressed = false;
      } else if (e.key === "Left" || e.key === "ArrowLeft") {
        leftPressed = false;
      }
    }

    function startGame() {
      interval = setInterval(draw, 10);
    }

    var gameIsRunning = false;

    canvasRef.current.addEventListener("click", function () {
      if (!gameIsRunning) {
        gameIsRunning = true;
        startGame();
      }
    });
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="480"
        height="520"
        className="border"
      ></canvas>
    </div>
  );
}
