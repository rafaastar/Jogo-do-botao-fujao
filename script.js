var score = 0;
var countdown = 30; // Defina o tempo inicial do contador em segundos
var countdownInterval;

// Chamada para iniciar o jogo quando a página for carregada
window.onload = startGame;

function startGame() {
  // Inicia o jogo apenas se o temporizador ainda não estiver em execução
  if (!countdownInterval) {
    countdownInterval = setInterval(updateCountdown, 1000); // Chama a função updateCountdown a cada segundo
    moveButton(); // Move o botão inicialmente
  }
}

function updateCountdown() {
  // Atualiza o contador regressivo
  countdown--;
  document.getElementById('countdown').innerText = "" + countdown;

  if (countdown <= 0) {
    // Se o tempo acabar, para o jogo
    clearInterval(countdownInterval);
    document.getElementById('countdown').innerText = "Tempo esgotado!";
    document.getElementById("button").disabled = true; // Desabilita o botão
  }
}

function incrementScore() {
  // Incrementa a pontuação quando o botão é clicado
  score++;
  document.getElementById('score').innerText = "Pontuação: " + score;
  moveButton(); // Move o botão após cada clique
}

function moveButton() {
  // Move o botão para uma posição aleatória na janela
  var button = document.getElementById("button");
  var screenWidth = window.innerWidth - button.offsetWidth;
  var screenHeight = window.innerHeight - button.offsetHeight;

  var newX = Math.floor(Math.random() * screenWidth);
  var newY = Math.floor(Math.random() * screenHeight);

  button.style.left = newX + 'px';
  button.style.top = newY + 'px';

  button.classList.add('moving');
  setTimeout(function() {
    button.classList.remove('moving');
  }, 500);
}
