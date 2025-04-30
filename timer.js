function atualizarContador() {
    const dataInicial = new Date("2024-05-04T00:00:00");
    const agora = new Date();
    const diferenca = agora - dataInicial;
  
    const segundos = Math.floor(diferenca / 1000) % 60;
    const minutos = Math.floor(diferenca / 1000 / 60) % 60;
    const horas = Math.floor(diferenca / 1000 / 60 / 60) % 24;
    const dias = Math.floor(diferenca / 1000 / 60 / 60 / 24);
  
    document.getElementById("tempoPassado").textContent =
      `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
  }
  
  // Atualiza a cada segundo
  setInterval(atualizarContador, 1000);