// Platformer game using HTML canvas and JavaScript

// Set up canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Set up player
const player = {
  x: 50,
  y: 50,
  width: 30,
  height: 30,
  speed: 5,
  jumpSpeed: 10,
  isJumping: false,
  gravity: 0.5,
  frameX: 0,
  frameY: 0,
  frames: [
    { src: "player-1.png", count: 4 },
    { src: "player-2.png", count: 4 },
  ],
  currentFrame: 0,
  currentFrameCount: 0,
  updateFrame() {
    this.currentFrameCount++;
    if (this.currentFrameCount >= this.frames[this.currentFrame].count) {
      this.currentFrame++;
      if (this.currentFrame >= this.frames.length) this.currentFrame = 0;
      this.frameX = 0;
      this.frameY = this.frames[this.currentFrame].src.indexOf("/") + 1;
      this.currentFrameCount = 0;
    } else {
      this.frameX += 1;
      if (this.frameX >= this.frames[this.currentFrame].src.length) {
        this.frameX = 0;
      }
    }
  },
};

// Set up platform
const platform = {
  x: canvas.width / 2 - 50,
  y: canvas.height - 50,
  width: 100,
  height: 20,
};

// Draw player and platform
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    (new Image().src = player.frames[player.currentFrame].src),
    player.x,
    player.y,
    player.width,
    player.height
  );
  ctx.fillStyle = "black";
  ctx.fillRect(platform.x, platform.y, platform.width, platform.height);
}

// Update player and platform
function update() {
  if (keys.ArrowLeft && !keys.ArrowRight) {
    player.x -= player.speed;
  } else if (keys.ArrowRight && !keys.ArrowLeft) {
    player.x += player.speed;
  }

  if (keys.ArrowUp) {
    if (!player.isJumping) {
      player.isJumping = true;
      player.y -= player.jumpSpeed;
    }
  }

  if (player.isJumping) {
    player.y += player.gravity;
    if (player.y >= platform.y - player.height) {
      player.y = platform.y - player.height;
      player.isJumping = false;
    }
  }

  player.updateFrame();
}

// Main game loop
function gameLoop() {
  draw();
  update();
  requestAnimationFrame(gameLoop);
}

// Event listeners
window.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      keys.ArrowLeft = true;
      break;
    case "ArrowRight":
      keys.ArrowRight = true;
      break;
    case "ArrowUp":
      keys.ArrowUp = true;
      break;
  }
});

window.addEventListener("keyup", (e) => {
  switch (e.key) {
    case "ArrowLeft":
      keys.ArrowLeft = false;
      break;
    case "ArrowRight":
      keys.ArrowRight = false;
      break;
    case "ArrowUp":
      keys.ArrowUp = false;
      break;
  }
});

// Start the game
gameLoop();
