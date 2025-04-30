function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  // Posição aleatória na largura da tela
  heart.style.left = Math.random() * 100 + "vw";

  // Tamanho e velocidade aleatórios
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";
  heart.style.opacity = Math.random();

  document.body.appendChild(heart);
}

// Cria os corações a cada 300ms
const heartInterval = setInterval(createHeart, 300);

// Para a criação de corações após 10 segundos
setTimeout(() => {
  clearInterval(heartInterval);
}, 8000); // 10000ms = 10 segundos

window.onload = function () {
  const audio = document.getElementById('audio');
  const btn = document.getElementById('playPauseBtn');
  const icon = document.getElementById('playPauseIcon');
  const iconVideo = document.getElementById('iconVideo');
  const btnPlay = document.getElementById('buttonPlay');
  const video = document.getElementById('video');

  console.log("btnPlay:", btnPlay); // VERIFICAÇÃO

  document.getElementById("audio").volume = 0.2;

  function play() {
    video.play();
    iconVideo.classList.remove("fa-play");
    iconVideo.classList.add("fa-pause"); // Troca para o ícone de pause
    setTimeout(() => (
      btnPlay.classList.add('hidden')
    ), 1000)
    
  }

  btnPlay.addEventListener('click', function() {
    console.log("Botão de Play foi clicado");
    play();
  });

// (Opcional) Pausar/tocar ao clicar no próprio vídeo
video.addEventListener("click", () => {
  if (video.paused) {
    video.play();
    iconVideo.classList.remove('fa-play');
    iconVideo.classList.add("fa-pause");
  } else {
    video.pause();
    iconVideo.classList.remove('fa-pause');
    iconVideo.classList.add('fa-play');
  }
});

btn.addEventListener("click", () => {
  audio.volume = 0.2;
  if (audio.paused) {
    audio.play();
    playPauseIcon.classList.remove("fa-play");
    playPauseIcon.classList.add("fa-pause");
  } else {
    audio.pause();
    playPauseIcon.classList.remove("fa-pause");
    playPauseIcon.classList.add("fa-play");
  }
});
}