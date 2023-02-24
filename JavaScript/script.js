const mario = document.querySelector(".mario");
const goomba = document.querySelector(".goomba");
const contNumber = document.getElementById("count");

let count = 0;

const jump = () => {
  mario.classList.add("jump");

  setTimeout(() => {
    mario.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const goombaPosition = goomba.offsetLeft;
  const marioPosition = window.getComputedStyle(mario).bottom.replace("px", "");

  if (goombaPosition <= 50 && goombaPosition > 0 && marioPosition > 75) {
    count += 1;
    contNumber.textContent = count;
  }

  if (goombaPosition <= 50 && goombaPosition > 0 && marioPosition < 70) {
    goomba.style.animation = "none";
    goomba.style.left = `${goombaPosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "imagens/gameover.png";
    mario.style.width = "55px";
    mario.style.marginLeft = "20px"; //faz a imagem deslocar quando acaba a animação

    clearInterval(loop);
  }
}, 10);

document.addEventListener("keydown", jump);
